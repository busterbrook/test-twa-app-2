import React from "react";
import {Address, OpenedContract, toNano} from "ton-core";
import { useAsyncInitialize } from "./useAsyncInitialize";
import { useTonClient } from "./useTonClient";
import { useTonConnect } from "./useTonConnect";
import {CreateOffer, ThreeSideContract} from "../../build/ThreeSideContract/tact_ThreeSideContract.ts";
import {useTonAddress} from "@tonconnect/ui-react";

//const testnetAddress: string = "EQCKNM8n6H4tJoUEKrFnVbEgU7xaco7eYv_i5XI7aKyzR1r2"

type OfferData = {
    offerId: number
    amountOut: number
    currencyOut: string
    amountIn: number
    currencyIn: string
}

export function useCreateOffer({offerId, amountOut, currencyOut, amountIn, currencyIn}: OfferData){
    const userFriendlyAddress = useTonAddress();
    //const userAddress: string = "0QCLj6VyDVOla9T3ppUpZnmqsJek51FkSpG_Bto_aPX1CY2E"
    const {client} = useTonClient();
    const {sender} = useTonConnect();

    console.log(userFriendlyAddress)

    const createOffer = useAsyncInitialize(async() => {
        if(!client) return

        const contract = ThreeSideContract.fromAddress(Address.parse("EQBnn_RlFxQPlwvmOwpfi9UXnSYtOIiJA-dR2xW5uF7O-pVL"))

        return client.open(contract) as OpenedContract<ThreeSideContract>
    }, [client])

    return {
        createOffer: () => {
            const message: CreateOffer = {
                $$type: "CreateOffer",
                offerId: toNano(offerId),
                amountOut: toNano(amountOut),
                currencyOut: currencyOut,
                amountIn: toNano(amountIn),
                currencyIn: currencyIn,
                addressMaker: Address.parse(userFriendlyAddress)
            }
            createOffer?.send(sender, {
                value: toNano((amountOut) + (amountOut * 0.01))
            }, message)
        }
    }
}