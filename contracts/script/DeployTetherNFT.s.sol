// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.23 <0.9.0;

import { console2 } from "forge-std/console2.sol";
import { Upgrades } from "openzeppelin-foundry-upgrades/Upgrades.sol";


import { PhiTetherNFT } from "../src/PhiTetherNFT.sol";
import { BaseScript } from "./Base.s.sol";

// https://github.com/OpenZeppelin/openzeppelin-foundry-upgrades/blob/main/test/Upgrades.s.sol
/// @dev See the Solidity Scripting tutorial: https://book.getfoundry.sh/tutorials/solidity-scripting
contract DeployTetherNFT is BaseScript {
    address deployer;
    PhiTetherNFT phiTetherNFT;

    using LibClone for address;

    function setUp() public virtual {
        string memory mnemonic = vm.envString("MNEMONIC");
        (deployer,) = deriveRememberKey(mnemonic, 0);
    }

    function run() public broadcast {
        address tetherAddresProxy = Upgrades.deployTransparentProxy(
            "PhiTetherNFT.sol", deployer, abi.encodeCall(PhiTetherNFT.initialize, (deployer))
        );
        PhiTetherNFT instance = PhiTetherNFT(tetherAddresProxy);

        address owner = instance.owner();
        console2.log("PhiTetherNFT owner: %s", owner);


    }
}
