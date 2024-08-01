import React from "react";
import { Address, OpenedContract, toNano } from "ton-core";
import {SendLightContract,SendTon} from "../wrappers/SendLightContract"
import { useAsyncInitialize } from "./useAsyncInitialize";
import { useTonClient } from "./useTonClient";
import { useTonConnect } from "./useTonConnect";
import {CHAIN} from "@tonconnect/protocol";

type AmountProps = {amountSend: number}

// "EQCKNM8n6H4tJoUEKrFnVbEgU7xaco7eYv_i5XI7aKyzR1r2" - testnet
// "EQAf7jwaX6ajc7bt8gZ1ZYXKJGkYKhTsy3Ekb6i1fg9Hs-Jz" - mainnet

export function useSendContract({amountSend}: AmountProps){
    // Addresses
    const mainnetAddress: string = "EQAf7jwaX6ajc7bt8gZ1ZYXKJGkYKhTsy3Ekb6i1fg9Hs-Jz"
    const testnetAddress: string = "EQCKNM8n6H4tJoUEKrFnVbEgU7xaco7eYv_i5XI7aKyzR1r2"

    const {client} = useTonClient()
    const {sender, network} = useTonConnect()

    const sendContract = useAsyncInitialize(async() => {
        if(!client) return 

        const contract = SendLightContract.fromAddress(Address.parse(
            network ? network === CHAIN.MAINNET ? mainnetAddress : testnetAddress: "N/A"
        ))

        // @ts-ignore
        return client.open(contract) as OpenedContract<SendLightContract>
    }, [client])

    return {
        sendTon: () => {
            const message: SendTon = {
                $$type: "SendTon",
                amountTon: toNano(amountSend)
            }
            // @ts-ignore
            sendContract?.send(sender, {
                value: toNano((amountSend) + (amountSend * 0.05))
            }, message)
        }
    }
}