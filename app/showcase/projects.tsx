import { ReactLogo, FlutterLogo, ApiLogo } from './icons';

export const showcases = [
    {
        image: require('@/public/images/Pixiverse.png'),
        name: 'Pixiverse',
        url: 'https://rpg-game-six.vercel.app',
        githubUrl: 'https://github.com/0xClint/Pixiverse',
        sdk: <ReactLogo />,
        sdkName: 'React',
        description: 'Pixiverse is an immersive 2D open-world game powered by Okto SDK for seamless on-boarding and interactions. It offers an engaging play-to-earn experience, where players can earn rare collectibles by clearing levels in challenging dungeons.\n\nOkto SDK handles all key integrations with smart contracts, manages user authentication through Google OAuth, and handles in-game interactions using raw transaction execute methods.',
        videoUrl: 'https://www.youtube.com/embed/5PhhP2hM_3o'
    },
    {
        image: require('@/public/images/Nixarcade.png'),
        name: 'NIXARCADE',
        url: 'https://nixarcade.fun/',
        githubUrl: 'https://github.com/NIXBLACK11/Nixarcade',
        sdk: <ReactLogo />,
        sdkName: 'React',
        description: 'Nixarcade is a social gaming platform where users can enjoy classic board games like Ludo with friends and family. Players can easily sign in through their Google account, contribute SOL, and join private games through unique codes.\n\nUsers can easily log in using their Google account and create an in-game wallet with Okto SDK, enabling them to play games without prior Web3 knowledge.',
        demoUrl: 'https://drive.google.com/file/d/1_MjB4ilZy6zHGz7FFmEYstkupDzt9kJo/view'
    },
    {
        image: require('@/public/images/Gcaller.png'),
        name: 'GCaller',
        url: 'https://gcaller.in/',
        githubUrl: 'https://github.com/Ronakkkkk/G-Caller',
        sdk: <FlutterLogo />,
        sdkName: 'Flutter',
        description: 'A unified spam protection platform powered by ZK compression to prove spam and incentivize users to flag spam. Uses on-chain ZK reputation to verify spam.\n\nOkto Wallet SDK is used as the embedded in-app wallet for authentication, wallet creation, and point distribution.',
        demoUrl: 'https://drive.google.com/file/d/1-3y6JcNnFK9Z2vvvWz_eS2lJbszjTs64/view'
    },
    {
        image: require('@/public/images/Emojipay.png'),
        name: 'Emojipay',
        url: 'https://emojipay.vercel.app/',
        githubUrl: 'https://github.com/0xPasho/emojipay.it',
        sdk: <ReactLogo />,
        sdkName: 'React',
        description: 'Send crypto with just emojis. No wallet addresses, no personal info—just your email and a fun, secure emoji handle.\n\nThe platform exclusively uses Okto for account creation, OAuth authentication, sending crypto, viewing portfolio and transaction details, and cross-chain transfers.',
        videoUrl: 'https://www.youtube.com/embed/72yIzyO67xA'
    },
    {
        image: require('@/public/images/Seconds.png'),
        name: 'Seconds',
        url: 'http://seconds.fi',
        githubUrl: 'https://github.com/shah-aman/seconds-fi-backend',
        sdk: <ApiLogo />,
        sdkName: 'API',
        description: 'Empowering savings through digital dollars and high-yield opportunities.\n\nLeverages Okto for creating and managing decentralized wallets for digital dollar savings and high-yield investments.',
        videoUrl: 'https://www.loom.com/embed/7b7de0f6c3da4333b0f2c7d78db320af'
    },
    {
        image: require('@/public/images/Catoff.png'),
        name: 'Catoff',
        url: 'https://www.catoff.xyz/',
        githubUrl: '#',
        sdk: <ReactLogo />,
        sdkName: 'React Native',
        description: 'Catoff is a P2P IRL Challenge Wagering dApp.\n\nIntegrates Okto decentralized wallet to enable seamless account abstraction and streamlined payments, allowing users to deposit funds, place wagers, and receive payouts within the dApp.',
        videoUrl: 'https://www.youtube.com/embed/VtZ2sgXiooU'
    },
    {
        image: require('@/public/images/Sublinks.png'),
        name: 'Sublinks',
        url: 'https://sublinks-frontend.vercel.app/home',
        githubUrl: 'https://github.com/HD-Delta-H/sublinks',
        sdk: <ReactLogo />,
        sdkName: 'React',
        description: 'Sublinks is a decentralised solution built on Solana Blockchain which utilises the power of BlockChain Links (Blinks) to help creators post premium content right within Twitter.\n\nUses Okto for creating wallets for creators and enables them to earn money in their created wallet with the ability to transfer to any external wallet.',
        videoUrl: 'https://www.youtube.com/embed/rq9o6qNRNy8'
    },
    {
        image: require('@/public/images/Poynt.png'),
        name: 'Poynt',
        url: 'https://drive.google.com/drive/folders/1_jpVT_uNJa7-uEOBoqw-mlD1UeEI8XuS',
        githubUrl: 'https://github.com/Solana-Poynt',
        sdk: <ReactLogo />,
        sdkName: 'React Native',
        description: 'Poynt is a product that seamlessly blends ride-hailing with in-transit advertising, built on the Solana blockchain. Offers a unique solution that reduces commute costs for passengers through optional ad viewing.\n\nIntegrates with Okto to allow drivers to receive payments directly in the embedded wallet and enables passengers to send crypto directly for payment from the app.',
        videoUrl: 'https://www.youtube.com/embed/mua6LWbo3vA'
    },
    {
        image: require('@/public/images/Stan.webp'),
        name: 'Stan',
        url: 'https://play.google.com/store/apps/details?id=com.getstan',
        githubUrl: '#',
        sdk: <ReactLogo />,
        sdkName: 'React Native',
        description: 'Stan is a mobile application integrated with Okto React Native SDK for seamless wallet management and transactions in the esports fan engagement ecosystem.'
    },
    {
        image: require('@/public/images/Oktogram.png'),
        name: 'Oktogram',
        url: 'https://oktogram.ujwl.in/',
        githubUrl: 'https://github.com/dhruv-colosus/OktoGram',
        sdk: <ReactLogo />,
        sdkName: 'React',
        description: 'A messaging app integrated with Okto for wallet functionality and token interactions.\n\nUtilizes Okto wallet and Auth Store with access tokens, transfer feature, portfolio viewing, and wallet management features.',
        videoUrl: 'https://www.loom.com/embed/c8b0436a9e0d4079a27e89046b33827e'
    },
    {
        image: require('@/public/images/OktoDeFiBot.png'),
        name: 'Okto DeFi Bot',
        url: 'https://discord.com/oauth2/authorize?client_id=1293702542072479907&permissions=67584&integration_type=0&scope=bot',
        githubUrl: 'https://github.com/samblackspy/Okto-DeFi-Bot/',
        sdk: <ApiLogo />,
        sdkName: 'API',
        description: 'A Discord bot that allows users to manage their DeFi assets and perform token transfers seamlessly within Discord.\n\nLeverages the Okto SDK to provide an all-in-one platform for managing digital assets within Discord.',
    },
    {
        image: require('@/public/images/DisbursalApp.png'),
        name: 'Disbursal App',
        url: 'https://okto-batch-token-disbursal-app.vercel.app/',
        githubUrl: 'https://github.com/okto-hq/okto-batch-token-disbursal-app',
        sdk: <ReactLogo />,
        sdkName: 'React',
        description: 'A batch token disbursal application using Okto SDK.'
    },
    {
        image: require('@/public/images/Lifafa.png'),
        name: 'Lifafa',
        url: 'https://www.lifafa.fun/',
        githubUrl: 'https://github.com/okto-hq/okto-sdk-react-example-lifafa',
        sdk: <ReactLogo />,
        sdkName: 'React',
        description: 'A gifting application built with Okto React SDK.'
    },
    {
        image: require('@/public/images/TelegramBot.png'),
        name: 'Telegram Trading Bot',
        url: 'https://t.me/oktron_bot',
        githubUrl: 'https://github.com/ProgramCpp/okotron',
        sdk: <ApiLogo />,
        sdkName: 'API',
        description: 'A Telegram bot enabling DeFi trading actions via Okto API. Used for cross chain token transfers, token swaps and automated token limit orders and copy trading.'
    },
    {
        image: require('@/public/images/BullRun.png'),
        name: 'Bull Run',
        url: 'https://unfold24-psi.vercel.app/',
        githubUrl: 'https://github.com/rk-rishikesh/unfold24',
        sdk: <ReactLogo />,
        sdkName: 'React',
        description: 'A decentralized platform utilizing Okto for Chain Abstraction, Gas Abstraction, and Secure Wallet Integration. The platform provides comprehensive integration including a Raw Transaction API and advanced Wallet APIs for seamless blockchain interactions.\n\nFeatures include secure authentication, efficient transaction handling, and intuitive portfolio management.',
        videoUrl: 'https://www.youtube.com/embed/RB-BvEgLAd4'
    },
    {
        image: require('@/public/images/OpenFund.png'),
        name: 'OpenFund',
        url: 'https://openfund.virajbhartiya.com/',
        githubUrl: 'https://github.com/Team-Obviously/OpenFund',
        sdk: <ReactLogo />,
        sdkName: 'React',
        description: 'A platform that leverages Okto SDK as an OAuth solution for user authentication and wallet generation. The system maps GitHub IDs with generated wallet addresses to facilitate fund distribution to users, making it accessible even to those new to web3.\n\nIncludes features for seamless cryptocurrency transactions and efficient wallet management.',
        videoUrl: 'https://www.loom.com/embed/421c57e35a5c4a2a8b531fc4473ba16c'
    },
    {
        image: require('@/public/images/AuroraFi.png'),
        name: 'AuroraFi',
        url: 'https://aurora-fi-frontend.vercel.app/',
        githubUrl: 'https://github.com/AuroraFi',
        sdk: <ReactLogo />,
        sdkName: 'React',
        description: 'Voice-Activated Multi-Agent Personal Finance & DeFi Platform - Making Web3 Accessible to Everyone. We are leveraging Okto APIs and SDK to facilitate transaction creation, cross-chain wallet management, and secure authentication within our platform. By integrating Okto\'s powerful tools, we enable users to perform seamless transactions, manage assets across multiple blockchains, and authenticate securely, all while providing a streamlined, user-friendly experience. This integration ensures robust functionality and enhances the overall security and efficiency of our platform.',
        videoUrl: 'https://www.youtube.com/embed/1A00_LbsFCM'
    },
    {
        image: require('@/public/images/ProofOfFollower.png'),
        name: 'Proof of Follower (PoF)',
        url: 'https://vanguard-eth.vercel.app/',
        githubUrl: 'https://github.com/mahim37/PoM',
        sdk: <ReactLogo />,
        sdkName: 'React',
        description: 'A platform that uses Google Sign-in and Okto\'s embedded wallet functionality for seamless web3 interactions. Features Raw Transaction execution and easy account address management.\n\nProvides a frictionless onboarding experience through well-integrated wallet and Google authentication.',
        videoUrl: 'https://www.youtube.com/embed/c0cwsH5i-Mc'
    },
    {
        image: require('@/public/images/SuperSplit.png'),
        name: 'SuperSplit',
        url: 'https://super-split.vercel.app/',
        githubUrl: 'https://github.com/Thirumurugan7/Super-Split',
        sdk: <ReactLogo />,
        sdkName: 'React',
        description: 'A platform implementing Google Sign-in authentication and ERC-20 token transfers using Okto SDK. The application enables users to read values from the chain and execute write function calls seamlessly.\n\nFeatures integrated wallet functionality and streamlined transaction processes.',
        videoUrl: 'https://www.youtube.com/embed/nurJOwzeU-g'
    },
    {
        image: require('@/public/images/CommitMint.png'),
        name: 'CommitMint',
        url: 'https://commit-mint.vercel.app/home',
        githubUrl: 'https://github.com/an2yea/CommitMint_Unfold24',
        sdk: <ReactLogo />,
        sdkName: 'React',
        description: 'Commit-mint is a consumer app designed to get more users to Web3 without the hassle of dealing with complex account addresses and private keys. Okto enabled us to achieve this with social login through Google, instantly creating wallets across chains for the user without any explicit input from them, making the transition very smooth and seamless as compared to a web2 experience.',
        videoUrl: 'https://www.loom.com/embed/1c1b5bbcd23645f2823f3fc9b79a57ba'
    },
    {
        image: require('@/public/images/CryptoMilan.png'),
        name: 'Crypto Milan',
        url: 'https://crypto-milan-react-oup5.vercel.app/',
        githubUrl: 'https://github.com/crypto-unfold2024/crypto-milan-react',
        sdk: <ReactLogo />,
        sdkName: 'React',
        description: 'Crypto Milan revolutionizes event engagement with POAPs (Proof of Attendance Protocol). Integrating geoFencing while circumferencing the area allows attendees to collect exclusive 3D POAPs as proof of participation @ Web3 events with AR/AI, unlocking rewards like discounts, NFTs, or exclusive perks. This incentivizes attendance, strengthens loyalty, and turns events into interactive and rewarding experiences for the community. By building on Okto, Crypto Milan uses its multichain transaction infrastructure to support POAP issuance, reward redemptions, and geofencing functionalities.',
        videoUrl: 'https://www.youtube.com/embed/uL2Ohjx7XHo'
    },
    {
        image: require('@/public/images/EzPortfolioManager.png'),
        name: 'Ez Portfolio Manager',
        url: 'https://github.com/AceVikings/Unfold-24-ace',
        githubUrl: 'https://github.com/AceVikings/Unfold-24-ace/tree/main/TelegramMiniApp',
        sdk: <ReactLogo />,
        sdkName: 'React',
        description: 'A personal crypto fund manager for everyone right on Telegram. The app uses Okto\'s embedded wallet and sandbox APIs to transfer tokens and manage in-app wallet for the user.',
        videoUrl: 'https://www.youtube.com/embed/CCMAq3TxtBQ'
    },
    {
        image: require('@/public/images/Intentify.png'),
        name: 'Intentify',
        url: 'https://intention-9s4f.vercel.app',
        githubUrl: 'https://github.com/abelzach/Intention',
        sdk: <ReactLogo />,
        sdkName: 'React',
        description: 'A user entering the Intentify application is authenticated via email OTP using OKTO. An embedded wallet is created for each user, with all on-chain transactions executed using OKTO SDK. The application provides logout functionality through the okto-react-sdk.\n\nKey challenges included executing transactions from the embedded wallet, which was overcome by thorough documentation review. The project focuses on smooth workflows, minimal user clicks, and leveraging gas fee sponsorship.',
        videoUrl: 'https://www.youtube.com/embed/dvc6sWlNMcI?start=191'
    },
    {
        image: require('@/public/images/Web3Games.png'),
        name: 'Web3Games',
        url: 'https://github.com/AceVikings/eth-india-project-2024',
        githubUrl: 'https://github.com/AceVikings/eth-india-project-2024',
        sdk: <ApiLogo />,
        sdkName: 'API',
        description: 'Casual Gaming made safer, profitable, and more fun with a decentralized solution. Web3Games blends gaming technology with AI and DeFi, creating a consumer-focused application where users can play safely and earn passively.\n\nThe platform leverages blockchain technology to provide a unique gaming experience that allows users to earn tokens while enjoying interactive gameplay.',
        videoUrl: 'https://www.youtube.com/embed/DxFuyROEw70'
    },
    {
        image: require('@/public/images/Palgo.png'),
        name: 'PalGo',
        url: 'https://www.palgo.live/',
        githubUrl: 'https://github.com/PalgoDev',
        sdk: <ReactLogo />,
        sdkName: 'React',
        description: 'PalGo is a massively multiplayer real-world 2.5D mobile explorer game inspired by Pokémon Go. Players interact with their surroundings to earn tokens, solving web3 user onboarding through an engaging gameplay experience.\n\nUsers are incentivized to explore real-life locations, battle in arenas, and find orbs to earn in-game tokens that can be converted to ETH. The Okto SDK enables seamless email login and wallet creation, empowering the next generation of web3 users from commercial and retail perspectives.',
        videoUrl: 'https://www.youtube.com/embed/V-oVmB6vDSM'
    }
];