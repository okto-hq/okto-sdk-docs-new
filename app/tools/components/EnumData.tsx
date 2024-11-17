export const enumData = [
    {
        key: "ORDER_TYPE",
        keyDesc: "Specifies the type of order.",
        apiUrls: [
            "https://docs.okto.tech/api-docs#tag/client/GET/api/v1/orders",
            "https://docs.okto.tech/api-docs#tag/client/GET/api/v1/nft/order_details"
        ],
        values: [
            { value: "MINT", desc: "Indicates that the order is for minting a new NFT." },
            { value: "NFT_TRANSFER", desc: "Indicates that the order is for transferring an NFT to another address." },
            { value: "TOKEN_TRANSFER_EXECUTE", desc: "Indicates that the order is for executing a token transfer transaction." },
            { value: "EXECUTE_RAW_TX", desc: "Indicates that the order is for executing a raw blockchain transaction." }
        ]
    },
    {
        key: "OPERATION_TYPE",
        keyDesc: "Specifies the type of operation being performed.",
        apiUrls: [
            "https://docs.okto.tech/api-docs#tag/client/POST/api/v1/nft/transfer"
        ],
        values: [
            { value: "MINT", desc: "Indicates that the order is for minting a new NFT." },
            { value: "NFT_TRANSFER", desc: "Indicates that the order is for transferring an NFT to another address." },
            { value: "TOKEN_TRANSFER_EXECUTE", desc: "Indicates that the order is for executing a token transfer transaction." },
            { value: "EXECUTE_RAW_TX", desc: "Indicates that the order is for executing a raw blockchain transaction." }
        ]
    },
    {
        key: "STATUS",
        keyDesc: "Represents the current status of the order or transaction.",
        apiUrls: [
            "https://docs.okto.tech/api-docs#tag/client/GET/api/v1/orders",
            "https://docs.okto.tech/api-docs#tag/client/GET/api/v1/nft/order_details",
            "https://docs.okto.tech/api-docs#tag/client/GET/api/v1/rawtransaction/status"
        ],
        values: [
            { value: "WAITING_INITIALIZATION", desc: "The order is in queue and has not yet started processing." },
            { value: "CREATED", desc: "The order has been initialized and is ready for processing." },
            { value: "RUNNING", desc: "The transaction is being processed on the blockchain." },
            { value: "WAITING_FOR_SIGNATURE", desc: "The system is in the process of signing the transaction payload." },
            { value: "REJECTED", desc: "The order was rejected and will not be processed further." },
            { value: "SUCCESS", desc: "The order was successfully processed and confirmed on the blockchain." },
            { value: "FAILED", desc: "The order failed during processing." }
        ]
    },
    {
        key: "ENTITY_TYPE",
        keyDesc: "Defines the type of NFT or asset involved in the transaction.",
        apiUrls: [
            "https://docs.okto.tech/api-docs#tag/client/GET/api/v1/nft/order_details"
        ],
        values: [
            { value: "ERC721", desc: "An ERC-721 standard NFT on EVM-compatible blockchains." },
            { value: "ERC1155", desc: "An ERC-1155 standard NFT on EVM-compatible blockchains." },
            { value: "NFT", desc: "An NFT on non-EVM blockchains." }
        ]
    }
]