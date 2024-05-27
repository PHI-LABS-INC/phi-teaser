// SPDX-License-Identifier: MIT
pragma solidity 0.8.23;

import { OwnableRoles } from "solady/auth/OwnableRoles.sol";
import { ERC721 } from "solady/tokens/ERC721.sol";
import { Initializable } from "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import { LibString } from "solady/utils/LibString.sol";

/**
 * @title  PhiTetherNFT
 * @author Phi Team
 * @notice The  PhiTetherNFT is an .
 * @dev This contract is the implementation of the PhiTetherNFT
 */
contract PhiTetherNFT is Initializable, OwnableRoles, ERC721 {
    /*//////////////////////////////////////////////////////////////
                                 USING
    //////////////////////////////////////////////////////////////*/
    using LibString for *;

    /*//////////////////////////////////////////////////////////////
                                STORAGE
    //////////////////////////////////////////////////////////////*/
    bool public queued;
    bool public reveal;

    uint256 public tokenIdCounter;
    string public baseTokenURI;
    string public originUrl;

    mapping(address => uint256 tokenId) public addressToTokenId;

    /*//////////////////////////////////////////////////////////////
                                 EVENTS
    //////////////////////////////////////////////////////////////*/
    event Initialized(address indexed owner);
    event Minted(address indexed to, uint256 indexed tokenId);

    /*//////////////////////////////////////////////////////////////
                                 ERRORS
    //////////////////////////////////////////////////////////////*/
    error TokenNotTransferable();
    error AddressAlreadyMinted();
    error NotOpened();
    error INVALID_ADDRESS_ZERO();

    /*//////////////////////////////////////////////////////////////
                               MODIFIERS
    //////////////////////////////////////////////////////////////*/
    modifier mintIsOpen() {
        if (!queued) revert NotOpened();
        _;
    }

    /*//////////////////////////////////////////////////////////////
                              CONSTRUCTOR
    //////////////////////////////////////////////////////////////*/
    /// @custom:oz-upgrades-unsafe-allow constructor
    // solhint-disable-next-line func-visibility
    constructor() {
        _disableInitializers();
    }

    function initialize(address ownerAddress_) external initializer {
        _initializeOwner(ownerAddress_);
        queued = true;
        originUrl = "https://gateway.irys.xyz/_5LUPfEfihS0HUB4Pb_wTjhKcM-3AQggHdkECILRLLQ";
        emit Initialized(ownerAddress_);
    }
    /*//////////////////////////////////////////////////////////////
                            EXTERNAL UPDATE
    //////////////////////////////////////////////////////////////*/

    function setOpen(bool _queued) external onlyOwner {
        queued = _queued;
    }

    function setReveal(bool _reveal) external onlyOwner {
        reveal = _reveal;
    }

    function setOriginUrl(string memory _originUrl) external onlyOwner {
        originUrl = _originUrl;
    }

    /// @dev universal dynamic mint function
    function mint(address to) external payable mintIsOpen {
        if (balanceOf(to) > 0) revert AddressAlreadyMinted();

        unchecked {
            tokenIdCounter += 1;
        }
        addressToTokenId[to] = tokenIdCounter;
        _mint(to, tokenIdCounter);
        emit Minted(to, tokenIdCounter);
    }

    /*//////////////////////////////////////////////////////////////
                             EXTERNAL VIEW
    //////////////////////////////////////////////////////////////*/
    /// @dev Returns the token collection name.
    function name() public pure override returns (string memory) {
        return "Why Phi";
    }

    /// @dev Returns the token collection symbol.
    function symbol() public pure override returns (string memory) {
        return "Why-Phi";
    }

    /// @dev Returns the Uniform Resource Identifier (URI) for token `id`.
    function tokenURI(uint256 id) public view override returns (string memory) {
        if (reveal) {
            return originUrl;
        }
        address owner = ownerOf(id);
        return LibString.concat(baseTokenURI, owner.toHexString()).concat("?id=").concat(id.toString());
    }

    function setBaseURI(string memory baseURI) public onlyOwner {
        baseTokenURI = baseURI;
    }

    /*//////////////////////////////////////////////////////////////
                             INTERNAL VIEW
    //////////////////////////////////////////////////////////////*/
    /// @dev soulbound tokens are not transferable
    function _beforeTokenTransfer(address from, address to, uint256 tokenId) internal override {
        if (from != address(0)) revert TokenNotTransferable();
        super._beforeTokenTransfer(from, to, tokenId);
    }
}
