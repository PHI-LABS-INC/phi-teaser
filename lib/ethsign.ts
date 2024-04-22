import { SignProtocolClient, SpMode, OffChainSignType } from "@ethsign/sp-sdk";
import { Address, privateKeyToAccount } from "viem/accounts";

const client = new SignProtocolClient(SpMode.OffChain, {
  signType: OffChainSignType.EvmEip712,
  account: privateKeyToAccount(process.env.ETHSIGN_PRIVATE_KEY as Address),
});

export async function createCreatorEvaluationSchema(): Promise<string> {
  // const schemaInfo = await client.createSchema({
  //   name: "Creator Evaluation",
  //   data: [
  //     { name: "artwork", type: "string" },
  //     { name: "creatorAddress", type: "address" },
  //     { name: "evaluatorAddress", type: "address" },
  //     { name: "score", type: "uint256" },
  //     { name: "comment", type: "string" },
  //   ],
  // });
  // return schemaInfo.schemaId;

  return "SPS_ZVaqNYNHA7D_o6FuF4HEb";
}

export async function createCreatorEvaluationAttestation(
  schemaId: string,
  creatorAddress: Address,
  artwork: string,
  evaluatorAddress: Address,
  score: number,
  comment: string
): Promise<string> {
  const attestationInfo = await client.createAttestation({
    schemaId,
    data: {
      artwork,
      creatorAddress,
      evaluatorAddress,
      score,
      comment,
    },
    recipients: [creatorAddress],
    attestTimestamp: Date.now(),
    indexingValue: creatorAddress,
  });
  return attestationInfo.attestationId;
}
