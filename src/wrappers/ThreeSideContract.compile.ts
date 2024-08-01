import { CompilerConfig } from '@ton/blueprint';

export const compile: CompilerConfig = {
    lang: 'tact',
    target: 'contracts/three_side_contract.tact',
    options: {
        debug: true,
    },
};
