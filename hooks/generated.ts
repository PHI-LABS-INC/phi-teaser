import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PhiTetherNFT
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xe6083C0fd7bD9bd20e416b579E5639C4Cb759ddF)
 */
export const phiTetherNftAbi = [
  { stateMutability: 'nonpayable', type: 'constructor', inputs: [] },
  { type: 'error', inputs: [], name: 'AccountBalanceOverflow' },
  { type: 'error', inputs: [], name: 'AddressAlreadyMinted' },
  { type: 'error', inputs: [], name: 'AlreadyInitialized' },
  { type: 'error', inputs: [], name: 'BalanceQueryForZeroAddress' },
  { type: 'error', inputs: [], name: 'INVALID_ADDRESS_ZERO' },
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'NewOwnerIsZeroAddress' },
  { type: 'error', inputs: [], name: 'NoHandoverRequest' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  { type: 'error', inputs: [], name: 'NotOpened' },
  { type: 'error', inputs: [], name: 'NotOwnerNorApproved' },
  { type: 'error', inputs: [], name: 'TokenAlreadyExists' },
  { type: 'error', inputs: [], name: 'TokenDoesNotExist' },
  { type: 'error', inputs: [], name: 'TokenNotTransferable' },
  { type: 'error', inputs: [], name: 'TransferFromIncorrectOwner' },
  { type: 'error', inputs: [], name: 'TransferToNonERC721ReceiverImplementer' },
  { type: 'error', inputs: [], name: 'TransferToZeroAddress' },
  { type: 'error', inputs: [], name: 'Unauthorized' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'isApproved',
        internalType: 'bool',
        type: 'bool',
        indexed: false,
      },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'pendingOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipHandoverCanceled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'pendingOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipHandoverRequested',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'result', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'baseTokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'burn',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [],
    name: 'cancelOwnershipHandover',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'pendingOwner', internalType: 'address', type: 'address' },
    ],
    name: 'completeOwnershipHandover',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: 'result', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'ownerAddress_', internalType: 'address', type: 'address' },
    ],
    name: 'initialize',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: 'result', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'mint',
    outputs: [],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: 'result', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'result', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'pendingOwner', internalType: 'address', type: 'address' },
    ],
    name: 'ownershipHandoverExpiresAt',
    outputs: [{ name: 'result', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'queued',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [],
    name: 'requestOwnershipHandover',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'isApproved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'baseURI', internalType: 'string', type: 'string' }],
    name: 'setBaseURI',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_queued', internalType: 'bool', type: 'bool' }],
    name: 'setOpen',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: 'result', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
] as const

/**
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xe6083C0fd7bD9bd20e416b579E5639C4Cb759ddF)
 */
export const phiTetherNftAddress = {
  8453: '0xe6083C0fd7bD9bd20e416b579E5639C4Cb759ddF',
} as const

/**
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xe6083C0fd7bD9bd20e416b579E5639C4Cb759ddF)
 */
export const phiTetherNftConfig = {
  address: phiTetherNftAddress,
  abi: phiTetherNftAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link phiTetherNftAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xe6083C0fd7bD9bd20e416b579E5639C4Cb759ddF)
 */
export const useReadPhiTetherNft = /*#__PURE__*/ createUseReadContract({
  abi: phiTetherNftAbi,
  address: phiTetherNftAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link phiTetherNftAbi}__ and `functionName` set to `"balanceOf"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xe6083C0fd7bD9bd20e416b579E5639C4Cb759ddF)
 */
export const useReadPhiTetherNftBalanceOf = /*#__PURE__*/ createUseReadContract(
  {
    abi: phiTetherNftAbi,
    address: phiTetherNftAddress,
    functionName: 'balanceOf',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link phiTetherNftAbi}__ and `functionName` set to `"baseTokenURI"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xe6083C0fd7bD9bd20e416b579E5639C4Cb759ddF)
 */
export const useReadPhiTetherNftBaseTokenUri =
  /*#__PURE__*/ createUseReadContract({
    abi: phiTetherNftAbi,
    address: phiTetherNftAddress,
    functionName: 'baseTokenURI',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link phiTetherNftAbi}__ and `functionName` set to `"getApproved"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xe6083C0fd7bD9bd20e416b579E5639C4Cb759ddF)
 */
export const useReadPhiTetherNftGetApproved =
  /*#__PURE__*/ createUseReadContract({
    abi: phiTetherNftAbi,
    address: phiTetherNftAddress,
    functionName: 'getApproved',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link phiTetherNftAbi}__ and `functionName` set to `"isApprovedForAll"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xe6083C0fd7bD9bd20e416b579E5639C4Cb759ddF)
 */
export const useReadPhiTetherNftIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: phiTetherNftAbi,
    address: phiTetherNftAddress,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link phiTetherNftAbi}__ and `functionName` set to `"name"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xe6083C0fd7bD9bd20e416b579E5639C4Cb759ddF)
 */
export const useReadPhiTetherNftName = /*#__PURE__*/ createUseReadContract({
  abi: phiTetherNftAbi,
  address: phiTetherNftAddress,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link phiTetherNftAbi}__ and `functionName` set to `"owner"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xe6083C0fd7bD9bd20e416b579E5639C4Cb759ddF)
 */
export const useReadPhiTetherNftOwner = /*#__PURE__*/ createUseReadContract({
  abi: phiTetherNftAbi,
  address: phiTetherNftAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link phiTetherNftAbi}__ and `functionName` set to `"ownerOf"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xe6083C0fd7bD9bd20e416b579E5639C4Cb759ddF)
 */
export const useReadPhiTetherNftOwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: phiTetherNftAbi,
  address: phiTetherNftAddress,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link phiTetherNftAbi}__ and `functionName` set to `"ownershipHandoverExpiresAt"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xe6083C0fd7bD9bd20e416b579E5639C4Cb759ddF)
 */
export const useReadPhiTetherNftOwnershipHandoverExpiresAt =
  /*#__PURE__*/ createUseReadContract({
    abi: phiTetherNftAbi,
    address: phiTetherNftAddress,
    functionName: 'ownershipHandoverExpiresAt',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link phiTetherNftAbi}__ and `functionName` set to `"queued"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xe6083C0fd7bD9bd20e416b579E5639C4Cb759ddF)
 */
export const useReadPhiTetherNftQueued = /*#__PURE__*/ createUseReadContract({
  abi: phiTetherNftAbi,
  address: phiTetherNftAddress,
  functionName: 'queued',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link phiTetherNftAbi}__ and `functionName` set to `"supportsInterface"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xe6083C0fd7bD9bd20e416b579E5639C4Cb759ddF)
 */
export const useReadPhiTetherNftSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: phiTetherNftAbi,
    address: phiTetherNftAddress,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link phiTetherNftAbi}__ and `functionName` set to `"symbol"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xe6083C0fd7bD9bd20e416b579E5639C4Cb759ddF)
 */
export const useReadPhiTetherNftSymbol = /*#__PURE__*/ createUseReadContract({
  abi: phiTetherNftAbi,
  address: phiTetherNftAddress,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link phiTetherNftAbi}__ and `functionName` set to `"tokenURI"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xe6083C0fd7bD9bd20e416b579E5639C4Cb759ddF)
 */
export const useReadPhiTetherNftTokenUri = /*#__PURE__*/ createUseReadContract({
  abi: phiTetherNftAbi,
  address: phiTetherNftAddress,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link phiTetherNftAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xe6083C0fd7bD9bd20e416b579E5639C4Cb759ddF)
 */
export const useWritePhiTetherNft = /*#__PURE__*/ createUseWriteContract({
  abi: phiTetherNftAbi,
  address: phiTetherNftAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link phiTetherNftAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xe6083C0fd7bD9bd20e416b579E5639C4Cb759ddF)
 */
export const useWritePhiTetherNftApprove = /*#__PURE__*/ createUseWriteContract(
  {
    abi: phiTetherNftAbi,
    address: phiTetherNftAddress,
    functionName: 'approve',
  },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link phiTetherNftAbi}__ and `functionName` set to `"burn"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xe6083C0fd7bD9bd20e416b579E5639C4Cb759ddF)
 */
export const useWritePhiTetherNftBurn = /*#__PURE__*/ createUseWriteContract({
  abi: phiTetherNftAbi,
  address: phiTetherNftAddress,
  functionName: 'burn',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link phiTetherNftAbi}__ and `functionName` set to `"cancelOwnershipHandover"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xe6083C0fd7bD9bd20e416b579E5639C4Cb759ddF)
 */
export const useWritePhiTetherNftCancelOwnershipHandover =
  /*#__PURE__*/ createUseWriteContract({
    abi: phiTetherNftAbi,
    address: phiTetherNftAddress,
    functionName: 'cancelOwnershipHandover',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link phiTetherNftAbi}__ and `functionName` set to `"completeOwnershipHandover"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xe6083C0fd7bD9bd20e416b579E5639C4Cb759ddF)
 */
export const useWritePhiTetherNftCompleteOwnershipHandover =
  /*#__PURE__*/ createUseWriteContract({
    abi: phiTetherNftAbi,
    address: phiTetherNftAddress,
    functionName: 'completeOwnershipHandover',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link phiTetherNftAbi}__ and `functionName` set to `"initialize"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xe6083C0fd7bD9bd20e416b579E5639C4Cb759ddF)
 */
export const useWritePhiTetherNftInitialize =
  /*#__PURE__*/ createUseWriteContract({
    abi: phiTetherNftAbi,
    address: phiTetherNftAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link phiTetherNftAbi}__ and `functionName` set to `"mint"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xe6083C0fd7bD9bd20e416b579E5639C4Cb759ddF)
 */
export const useWritePhiTetherNftMint = /*#__PURE__*/ createUseWriteContract({
  abi: phiTetherNftAbi,
  address: phiTetherNftAddress,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link phiTetherNftAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xe6083C0fd7bD9bd20e416b579E5639C4Cb759ddF)
 */
export const useWritePhiTetherNftRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: phiTetherNftAbi,
    address: phiTetherNftAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link phiTetherNftAbi}__ and `functionName` set to `"requestOwnershipHandover"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xe6083C0fd7bD9bd20e416b579E5639C4Cb759ddF)
 */
export const useWritePhiTetherNftRequestOwnershipHandover =
  /*#__PURE__*/ createUseWriteContract({
    abi: phiTetherNftAbi,
    address: phiTetherNftAddress,
    functionName: 'requestOwnershipHandover',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link phiTetherNftAbi}__ and `functionName` set to `"safeTransferFrom"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xe6083C0fd7bD9bd20e416b579E5639C4Cb759ddF)
 */
export const useWritePhiTetherNftSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: phiTetherNftAbi,
    address: phiTetherNftAddress,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link phiTetherNftAbi}__ and `functionName` set to `"setApprovalForAll"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xe6083C0fd7bD9bd20e416b579E5639C4Cb759ddF)
 */
export const useWritePhiTetherNftSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: phiTetherNftAbi,
    address: phiTetherNftAddress,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link phiTetherNftAbi}__ and `functionName` set to `"setBaseURI"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xe6083C0fd7bD9bd20e416b579E5639C4Cb759ddF)
 */
export const useWritePhiTetherNftSetBaseUri =
  /*#__PURE__*/ createUseWriteContract({
    abi: phiTetherNftAbi,
    address: phiTetherNftAddress,
    functionName: 'setBaseURI',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link phiTetherNftAbi}__ and `functionName` set to `"setOpen"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xe6083C0fd7bD9bd20e416b579E5639C4Cb759ddF)
 */
export const useWritePhiTetherNftSetOpen = /*#__PURE__*/ createUseWriteContract(
  {
    abi: phiTetherNftAbi,
    address: phiTetherNftAddress,
    functionName: 'setOpen',
  },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link phiTetherNftAbi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xe6083C0fd7bD9bd20e416b579E5639C4Cb759ddF)
 */
export const useWritePhiTetherNftTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: phiTetherNftAbi,
    address: phiTetherNftAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link phiTetherNftAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xe6083C0fd7bD9bd20e416b579E5639C4Cb759ddF)
 */
export const useWritePhiTetherNftTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: phiTetherNftAbi,
    address: phiTetherNftAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link phiTetherNftAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xe6083C0fd7bD9bd20e416b579E5639C4Cb759ddF)
 */
export const useSimulatePhiTetherNft = /*#__PURE__*/ createUseSimulateContract({
  abi: phiTetherNftAbi,
  address: phiTetherNftAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link phiTetherNftAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xe6083C0fd7bD9bd20e416b579E5639C4Cb759ddF)
 */
export const useSimulatePhiTetherNftApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: phiTetherNftAbi,
    address: phiTetherNftAddress,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link phiTetherNftAbi}__ and `functionName` set to `"burn"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xe6083C0fd7bD9bd20e416b579E5639C4Cb759ddF)
 */
export const useSimulatePhiTetherNftBurn =
  /*#__PURE__*/ createUseSimulateContract({
    abi: phiTetherNftAbi,
    address: phiTetherNftAddress,
    functionName: 'burn',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link phiTetherNftAbi}__ and `functionName` set to `"cancelOwnershipHandover"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xe6083C0fd7bD9bd20e416b579E5639C4Cb759ddF)
 */
export const useSimulatePhiTetherNftCancelOwnershipHandover =
  /*#__PURE__*/ createUseSimulateContract({
    abi: phiTetherNftAbi,
    address: phiTetherNftAddress,
    functionName: 'cancelOwnershipHandover',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link phiTetherNftAbi}__ and `functionName` set to `"completeOwnershipHandover"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xe6083C0fd7bD9bd20e416b579E5639C4Cb759ddF)
 */
export const useSimulatePhiTetherNftCompleteOwnershipHandover =
  /*#__PURE__*/ createUseSimulateContract({
    abi: phiTetherNftAbi,
    address: phiTetherNftAddress,
    functionName: 'completeOwnershipHandover',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link phiTetherNftAbi}__ and `functionName` set to `"initialize"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xe6083C0fd7bD9bd20e416b579E5639C4Cb759ddF)
 */
export const useSimulatePhiTetherNftInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: phiTetherNftAbi,
    address: phiTetherNftAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link phiTetherNftAbi}__ and `functionName` set to `"mint"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xe6083C0fd7bD9bd20e416b579E5639C4Cb759ddF)
 */
export const useSimulatePhiTetherNftMint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: phiTetherNftAbi,
    address: phiTetherNftAddress,
    functionName: 'mint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link phiTetherNftAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xe6083C0fd7bD9bd20e416b579E5639C4Cb759ddF)
 */
export const useSimulatePhiTetherNftRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: phiTetherNftAbi,
    address: phiTetherNftAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link phiTetherNftAbi}__ and `functionName` set to `"requestOwnershipHandover"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xe6083C0fd7bD9bd20e416b579E5639C4Cb759ddF)
 */
export const useSimulatePhiTetherNftRequestOwnershipHandover =
  /*#__PURE__*/ createUseSimulateContract({
    abi: phiTetherNftAbi,
    address: phiTetherNftAddress,
    functionName: 'requestOwnershipHandover',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link phiTetherNftAbi}__ and `functionName` set to `"safeTransferFrom"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xe6083C0fd7bD9bd20e416b579E5639C4Cb759ddF)
 */
export const useSimulatePhiTetherNftSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: phiTetherNftAbi,
    address: phiTetherNftAddress,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link phiTetherNftAbi}__ and `functionName` set to `"setApprovalForAll"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xe6083C0fd7bD9bd20e416b579E5639C4Cb759ddF)
 */
export const useSimulatePhiTetherNftSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: phiTetherNftAbi,
    address: phiTetherNftAddress,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link phiTetherNftAbi}__ and `functionName` set to `"setBaseURI"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xe6083C0fd7bD9bd20e416b579E5639C4Cb759ddF)
 */
export const useSimulatePhiTetherNftSetBaseUri =
  /*#__PURE__*/ createUseSimulateContract({
    abi: phiTetherNftAbi,
    address: phiTetherNftAddress,
    functionName: 'setBaseURI',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link phiTetherNftAbi}__ and `functionName` set to `"setOpen"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xe6083C0fd7bD9bd20e416b579E5639C4Cb759ddF)
 */
export const useSimulatePhiTetherNftSetOpen =
  /*#__PURE__*/ createUseSimulateContract({
    abi: phiTetherNftAbi,
    address: phiTetherNftAddress,
    functionName: 'setOpen',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link phiTetherNftAbi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xe6083C0fd7bD9bd20e416b579E5639C4Cb759ddF)
 */
export const useSimulatePhiTetherNftTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: phiTetherNftAbi,
    address: phiTetherNftAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link phiTetherNftAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xe6083C0fd7bD9bd20e416b579E5639C4Cb759ddF)
 */
export const useSimulatePhiTetherNftTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: phiTetherNftAbi,
    address: phiTetherNftAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link phiTetherNftAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xe6083C0fd7bD9bd20e416b579E5639C4Cb759ddF)
 */
export const useWatchPhiTetherNftEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: phiTetherNftAbi,
    address: phiTetherNftAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link phiTetherNftAbi}__ and `eventName` set to `"Approval"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xe6083C0fd7bD9bd20e416b579E5639C4Cb759ddF)
 */
export const useWatchPhiTetherNftApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: phiTetherNftAbi,
    address: phiTetherNftAddress,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link phiTetherNftAbi}__ and `eventName` set to `"ApprovalForAll"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xe6083C0fd7bD9bd20e416b579E5639C4Cb759ddF)
 */
export const useWatchPhiTetherNftApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: phiTetherNftAbi,
    address: phiTetherNftAddress,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link phiTetherNftAbi}__ and `eventName` set to `"Initialized"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xe6083C0fd7bD9bd20e416b579E5639C4Cb759ddF)
 */
export const useWatchPhiTetherNftInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: phiTetherNftAbi,
    address: phiTetherNftAddress,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link phiTetherNftAbi}__ and `eventName` set to `"OwnershipHandoverCanceled"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xe6083C0fd7bD9bd20e416b579E5639C4Cb759ddF)
 */
export const useWatchPhiTetherNftOwnershipHandoverCanceledEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: phiTetherNftAbi,
    address: phiTetherNftAddress,
    eventName: 'OwnershipHandoverCanceled',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link phiTetherNftAbi}__ and `eventName` set to `"OwnershipHandoverRequested"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xe6083C0fd7bD9bd20e416b579E5639C4Cb759ddF)
 */
export const useWatchPhiTetherNftOwnershipHandoverRequestedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: phiTetherNftAbi,
    address: phiTetherNftAddress,
    eventName: 'OwnershipHandoverRequested',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link phiTetherNftAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xe6083C0fd7bD9bd20e416b579E5639C4Cb759ddF)
 */
export const useWatchPhiTetherNftOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: phiTetherNftAbi,
    address: phiTetherNftAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link phiTetherNftAbi}__ and `eventName` set to `"Transfer"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xe6083C0fd7bD9bd20e416b579E5639C4Cb759ddF)
 */
export const useWatchPhiTetherNftTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: phiTetherNftAbi,
    address: phiTetherNftAddress,
    eventName: 'Transfer',
  })
