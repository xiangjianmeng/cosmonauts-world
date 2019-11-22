const categories = ['all', 'cosmos sdk', 'tendermint core', 'tendermint bft'];

const mapping = [
  {
    name: 'cyber~Congress',
    description: 'A distributed relevance and answering machine. An inter-planetary search engine & a state of the art consensus computer, built with the help of go-IPFS and cosmos-SDK',
    image: '/static/logos/cybercongress.png',
    network: 'testnet',
    verified: 'false',
    links: {
      proof: 'https://github.com/cybercongress/cyberd',
      github: 'https://github.com/cybercongress',
      twitter: 'https://twitter.com/cyber_devs',
      chat: 'https://t.me/fuckgoogle',
      website: 'https://cybercongress.ai/',
    },
    tags: ['cosmos sdk', 'tendermint bft'],
  },
  {
    name: 'Minter',
    description: 'Minter offers you the ability to issue, transfer, or exchange your own coin in seconds with instant liquidity. All our products are open-source—iOS, Android, Web, and Telegram wallets; an API and an SDK.',
    image: '/static/logos/minter.png',
    network: 'mainnet',
    verified: 'false',
    links: {
      proof: 'https://github.com/MinterTeam/minter-go-node',
      github: 'https://github.com/MinterTeam',
      twitter: 'https://twitter.com/MinterTeam',
      chat: 'https://t.me/MinterNetworkGroup',
      website: 'https://minter.network',
    },
    tags: ['tendermint bft'],
  },
  {
    name: 'Gaia',
    description: 'The Cosmos Hub is the first of thousands of interconnected blockchains that will eventually comprise the Cosmos Network . The primary token of the Cosmos Hub is the ATOM , but the Hub will support many tokens in the future.',
    image: '/static/logos/gaia.png',
    network: 'mainnet',
    verified: 'false',
    links: {
      github: 'https://github.com/cosmos/gaia',
    },
    tags: ['cosmos sdk'],
  },
  {
    name: 'Binance Chain',
    description: 'Binance Chain is a blockchain software system developed by Binance and its community. Binance DEX refers to the decentralized exchange features developed on top of Binance Chain. The purpose of the new blockchain and DEX is to create an alternative marketplace for issuing and exchanging digital assets in a decentralized manner.',
    image: '/static/logos/binance-chain.png',
    network: 'mainnet',
    verified: 'false',
    links: {
      proof: 'https://binance-chain.github.io/acknowledgement.html#tendermint-and-cosmos',
      github: 'https://github.com/binance-chain/',
      chat: 'https://t.me/binanceexchange',
      website: 'https://binance-chain.github.io/',
    },
    tags: ['cosmos sdk'],
  },
  {
    name: 'Kira Interchain Exchange',
    description: 'Kira is a next generation hyperscale decentralized exchange (DEX) engineered for cross-chain transfers and frictionless trading. On the one hand, Kira aims to deliver all the liquidity, performance and trading sophistication of a centralised exchange but without the custody, downtime and fraud risk that plague our industry. On the other hand, Kira offers stronger security guarantees than state-of-the-art DEXs, but with a powerful governance model that builds trust and engagement whilst actively resisting corruption.',
    image: '/static/logos/kiraex.png',
    network: '?',
    verified: 'false',
    links: {
      proof: 'https://medium.com/kira-core/introducing-kira-the-future-of-interchain-exchange-c5d8f4223607',
      github: 'https://github.com/kira-ex',
      twitter: 'https://twitter.com/kiraex',
      chat: 'https://t.me/kirainterex',
      website: 'https://kiraex.com/',
    },
    tags: ['cosmos sdk'],
  },
  {
    name: 'Aragon',
    description: 'Aragon empowers you to freely organize and collaborate without borders or intermediaries. Create global, bureaucracy-free organizations, companies, and communities.',
    image: '/static/logos/aragon-chain.png',
    network: '?',
    verified: 'false',
    links: {
      proof: 'https://blog.aragon.one/aragon-chain',
      github: 'https://github.com/aragon',
      chat: 'https://aragon.chat',
      website: 'https://aragon.org/',
    },
    tags: ['cosmos sdk', 'ethermint'],
  },
  {
    name: 'e-Money',
    description: 'Today’s global transaction market is filled with high and non-transparent fees as well as lengthy processes. Engaging in a global money transfer is both expensive and unnecessarily slow. What if you could transfer money from one account to another anywhere in the world, with low cost transparent fees and in real-time, making the transaction instant and painless? e-Money empowers People and Businesses to make instant global transactions using the technology of tomorrow.',
    image: '/static/logos/e-money.png',
    network: 'testnet',
    verified: 'false',
    links: {
      proof: 'https://e-money.com/documents/e-Money%20Whitepaper.pdf',
      github: 'https://github.com/e-money',
      chat: 'https://t.me/emoney_com',
      website: 'https://e-money.com/',
    },
    tags: ['cosmos sdk', 'tendermint bft'],
  },
  {
    name: 'Sentinel',
    description: 'Sentinel is a network layer for p2p or decentralized applications enabling users and organizations to create Public and Private networks that provide access to both free and incentivised, payment-type (currency/token/fiat) agnostic Services & distributed Resources. With paradigms of Web3 in mind we allow users to become both producers and consumers in the network while earning and spending whitelisted tokens such as Bitcoin, Ethereum, Photons, Atoms or any other, which enables everyone to participate in the system without being forced to use any particular coin.',
    image: '/static/logos/sentinel.png',
    network: '?',
    verified: 'false',
    links: {
      proof: 'https://github.com/sentinel-official/sentinel/blob/master/README.md',
      github: 'https://github.com/sentinel-official/sentinel',
      twitter: 'http://twitter.com/sentinel_co',
      chat: 'https://t.me/sentinel_co',
      website: 'https://sentinel.co/',
    },
    tags: ['cosmos sdk', 'tendermint core'],
  },
  {
    name: 'FOAM',
    description: 'FOAM’s dynamic proof of location protocol will enable a permissionless and privacy-preserving network of radio beacons that is independent from external centralized sources such as GPS and capable of providing secure location verification services.',
    image: '/static/logos/foam.png',
    network: '?',
    verified: 'false',
    links: {
      proof: 'https://blog.foam.space/tendermint-foam-achieving-global-scalability-through-local-consensus-4c63c8bb51a8',
      github: 'https://github.com/f-o-a-m/',
      chat: 'https://t.me/foamspace',
      website: 'https://www.foam.space/',
    },
    tags: ['tendermint core'],
  },
  {
    name: 'COMDEX',
    description: 'Comdex is revolutionising the archaic and laggard commodity trade industry to make it more efficient and usher it into the next era of transformation. Comdex revolutionizes the $17 trillion a year commodity trading industry by using existing banking structures and advanced technology. With a plethora of solutions including a single platform to connect trade financiers, aid in trade settlement and propel trade discoveries, Comdex is already in the pilot phase with trades of millions of dollars.',
    image: '/static/logos/comdex.jpg',
    network: '?',
    verified: 'false',
    links: {
      proof: 'https://www.youtube.com/watch?v=Tz4jfzPuqL0',
      website: 'https://comdex.sg/',
    },
    tags: ['cosmos sdk'],
  },
  {
    name: 'Althea',
    description: 'Althea is a system that lets routers pay each other for bandwidth. This allows people to set up decentralized ISPs in their communities. In an Althea network, instead of one ISP at the top collecting monthly payments, many different people can earn money by expanding and strengthening the network.',
    image: '/static/logos/althea.png',
    network: '?',
    verified: 'false',
    links: {
      proof: 'https://blog.althea.net/launching-the-althea-blockchain/',
      github: 'https://github.com/althea-net',
      chat: 'https://riot.im/app/#/room/#althea:matrix.org',
      website: 'https://althea.net/',
    },
    tags: ['cosmos sdk'],
  },
  {
    name: 'datopia',
    description: 'On-chain governance, voting analytics, supply chain management — processes many suspect will yield to blockchains — consume and translate vast quantities of information in all but the simplest cases. Platforms encumbered by astronomical storage costs — or inexpressive data modelling primitives — are unlikely to provide us with sustainable, cost-effective or transparent solutions to data-hungry problems. Our inaugural post, Blockchains as Information Systems, covers these ideas in more detail.',
    image: '/static/logos/datopia.png',
    network: '?',
    verified: 'false',
    links: {
      proof: 'https://blog.datopia.io/2019/04/04/building-your-first-clojure-blockchain/',
      github: 'https://github.com/datopia',
      twitter: 'https://twitter.com/datopians',
      website: 'https://datopia.io/',
    },
    tags: ['tendermint bft'],
  },
  {
    name: 'ProximaX',
    description: 'The ProximaX Sirius core infrastructure platform leverages on an amended and augmented blockchain and is integrated with peer-to-peer, distributed off-chain storage, streaming, and database layers. These are overlaid with APIs/SDKs in a wide range of languages for developers to rapidly develop and deploy their applications. By parallelising all of these protocols into manageable but distinct layers, ProximaX leverages the advantages of blockchain whilst solving its challenges via service layers found in traditional architectures, packaged into an all-in-one extensive framework.',
    image: '/static/logos/proximax.jpg',
    network: '?',
    verified: 'false',
    links: {
      proof: 'https://medium.com/@proximaxio/proximax-sirius-an-integrated-and-distributed-ledger-technology-platform-5ced5f38097b',
      github: 'https://github.com/proximax-storage',
      twitter: 'https://twitter.com/ProximaXio',
      chat: 'http://t.me/ProximaXio',
      website: 'https://www.proximax.io/',
    },
    tags: ['tendermint bft'],
  },
  {
    name: 'HyperLedger Burrow',
    description: 'Hyperledger Burrow is one of the Hyperledger projects hosted by The Linux Foundation. Hyperledger Burrow provides a modular blockchain client with a permissioned smart contract interpreter partially developed to the specification of the EVM.',
    image: '/static/logos/hyperledger-burrow.png',
    network: '?',
    verified: 'false',
    links: {
      proof: 'https://github.com/hyperledger/burrow',
      github: 'https://github.com/hyperledger/burrow',
      chat: 'https://chat.hyperledger.org/',
      website: 'https://hyperledger.org/projects/hyperledger-burrow',
    },
    tags: ['tendermint bft'],
  },
  {
    name: 'MESG',
    description: 'An open event channel and CLI for building and running modular applications. Control the flow of data and level of security between your whole stack of connected systems.',
    image: '/static/logos/mesg.jpg',
    network: '?',
    verified: 'false',
    links: {
      proof: 'https://medium.com/mesg/bi-weekly-news-29-08-19-3e7ce9d3533a',
      github: 'https://github.com/mesg-foundation',
      twitter: 'https://twitter.com/mesgfoundation',
      website: 'https://mesg.com/',
    },
    tags: ['cosmos sdk'],
  },
  {
    name: 'DecentRandom',
    description: 'Higher security and quality randomization than any traditional service can be handled at a fraction of the cost of a network fee.',
    image: '/static/logos/decentrandom.png',
    network: '?',
    verified: 'false',
    links: {
      proof: 'https://decentrandom.com/asset/whitepaper/whitepaper_beta_kr_v.0.2.1.pdf',
      github: 'https://github.com/decentrandom',
      chat: 'https://t.me/joinchat/EF5N2RHTiUOFs4db7vCviA',
      website: 'https://decentrandom.com/',
    },
    tags: ['cosmos sdk'],
  },
  {
    name: 'Regen Network',
    description: 'Regen Network is built to support a wide variety of ecological improvement agreements. These include agreements about improving practices, agreements about ecological changes and a combination of both. Changing practices isn’t 100% sure to be effective, but can be tracked in the short term. To track actual ecological impact, we look at long term indicators. Regen Network allows users to track change that is meaningful to them, not restricting metrics, and allowing us to gain a more holistic understanding of ecosystem health.',
    image: '/static/logos/regen-network.jpg',
    network: '?',
    verified: 'false',
    links: {
      proof: 'https://medium.com/regen-network/how-to-choose-a-blockchain-55a343fd7ec4',
      gitlab: 'https://gitlab.com/regen-network',
      chat: 'https://t.me/regennetwork_public',
      website: 'https://www.regen.network/',
    },
    tags: ['cosmos sdk', 'tendermint bft'],
  },
  {
    name: 'BigchainDB',
    description: 'Traditional blockchains lack what most enterprises require. BigchainDB takes a different approach, one that starts with a big data distributed database and then adds blockchain characteristics. The result is high throughput and low latency, making data-centric and high volume use cases a breeze. BigchainDB combines the all-important advantages of queryability and performance of traditional databases with the distributed, secure and immutable nature of blockchain technology into one package.',
    image: '/static/logos/bigchaindb.jpg',
    network: '?',
    verified: 'false',
    links: {
      proof: 'https://blog.bigchaindb.com/bigchaindb-2-0-is-byzantine-fault-tolerant-5ffdac96bc44',
      github: 'https://github.com/bigchaindb',
      twitter: 'https://twitter.com/BigchainDB',
      chat: 'https://gitter.im/bigchaindb/bigchaindb',
      website: 'https://www.bigchaindb.com/',
    },
    tags: ['tendermint bft'],
  },
  {
    name: 'Microtick',
    description: 'Microtick is a market-based system for crowdsourcing and incentivizing untrusted oracles to provide accurate streaming data to the Cosmos / Tendermint ecosystem.',
    image: '/static/logos/microtick.png',
    network: '?',
    verified: 'false',
    links: {
      proof: 'https://gitlab.com/microtick/mtkit/blob/master/docs/Microtick%20Guide%201.0.pdf',
      gitlab: 'https://gitlab.com/microtick',
      website: 'https://gitlab.com/microtick/mtkit',
    },
    tags: ['cosmos sdk', 'tendermint bft'],
  },
  {
    name: 'IOV',
    description: 'The IOV Name Service provides a human readable address instead of blockchain addresses to receive any kind of crypto-currencies. Built on Tendermint, IOV builds a fast, secure and decentralized name service. Any kind of crypto-addresses can be registered on the IOV Name Service.',
    image: '/static/logos/iov.png',
    network: '?',
    verified: 'false',
    links: {
      proof: 'https://docs.iov.one/docs/weave/welcome',
      github: 'https://github.com/iov-one',
      chat: 'https://t.me/internetofvalues',
      website: 'https://www.iov.one/',
    },
    tags: ['cosmos sdk', 'tendermint bft'],
  },
  {
    name: 'IRIS Network',
    description: 'IRISnet is designed to be the foundation for next generation distributed business applications. It is a BPoS blockchain, built with Cosmos-SDK, that enables cross-chain interoperability through a unified service model.',
    image: '/static/logos/irisnet.png',
    network: 'mainnet',
    verified: 'false',
    links: {
      proof: 'https://github.com/irisnet/irisnet/blob/master/WHITEPAPER.md',
      github: 'https://github.com/irisnet/',
      chat: 'https://t.me/irisnetwork',
      website: 'https://www.irisnet.org/',
    },
    tags: ['cosmos sdk'],
  },
  {
    name: 'Akash Network',
    description: 'Akash is the world’s first super cloud for serverless computing, empowering the architects and builders of the internet with greater access, freedom, and efficiency.',
    image: '/static/logos/akash-network.png',
    network: '?',
    verified: 'false',
    links: {
      proof: 'https://github.com/ovrclk/akash/search?q=tendermint&unscoped_q=tendermint',
      github: 'https://github.com/ovrclk/akash/',
      chat: 'https://t.me/AkashNW',
      website: 'https://akash.network/',
    },
    tags: ['tendermint core'],
  },
  {
    name: 'Loom Network',
    description: 'Loom is a Layer 2 scaling solution for Ethereum that includes a network of DPoS sidechains for highly-scalable games and user-facing DApps.',
    image: '/static/logos/loom-network.png',
    network: '?',
    verified: 'false',
    links: {
      proof: 'https://github.com/loomnetwork/loomchain',
      github: 'https://github.com/loomnetwork',
      chat: 'https://t.me/loomnetwork',
      website: 'https://loomx.io/',
    },
    tags: ['cosmos sdk'],
  },
  {
    name: 'LikeCoin',
    description: 'LikeCoin aims to reinvent the Like by realigning creativity and reward. We enable attribution and cross-application collaboration on creative contents. With a reinvented Like button and our unique LikeRank algorithm, we trace content footprint and reward content creators by Proof of Creativity mechanism.',
    image: '/static/logos/likecoin.png',
    network: 'mainnet',
    verified: 'false',
    links: {
      proof: 'https://github.com/likecoin/likechain',
      github: 'https://github.com/likecoin',
      chat: 'https://t.me/likecoin',
      website: 'https://like.co/',
    },
    tags: ['cosmos sdk'],
  },
  {
    name: 'Kava',
    description: 'Kava is the first cross-blockchain DeFi platform that enables traders to leverage their assets and hedge using a multi-collateral CDP system and collateral-backed stablecoin (USDX).',
    image: '/static/logos/kava.png',
    network: '?',
    verified: 'false',
    links: {
      proof: 'https://github.com/Kava-Labs/kava',
      github: 'https://github.com/Kava-Labs/',
      chat: 'https://t.me/joinchat/FkPmgRKdMAyLdWMItxYt0w',
      website: 'https://kava.io/',
    },
    tags: ['cosmos sdk'],
  },
  {
    name: 'Lino Network',
    description: 'A value-sharing content economy where content creators, viewers, and other contributors are fairly incentivized to maximize sustainable economic growth.',
    image: '/static/logos/lino-network.png',
    network: '?',
    verified: 'false',
    links: {
      proof: 'https://github.com/lino-network/cosmos-sdk',
      github: 'https://github.com/lino-network',
      chat: 'https://t.me/joinchat/HE1lF0cPRPDt61Gnh8KH3A',
      website: 'https://lino.network/',
    },
    tags: ['cosmos sdk'],
  },
];

module.exports = {
  categories,
  mapping,
};
