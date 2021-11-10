# ENS Twitter accounts

This repository contains [a comprehensive dump of 21,604 Twitter accounts](https://github.com/ultrasoundmoney/ens_twitter_accounts/blob/main/ens_twitter.json) that have an ENS domain in their name, bio, or location.

ENS folks wanted to drop $ENS tokens to Twitter accounts with a `.eth` in their profile but ran into technical issues (see [Brantly's tweet](https://twitter.com/BrantlyMillegan/status/1458312383332601856)). The ultra sound devs spent months building a high quality scraper of all Ethereum Twitter, scraping over 5.3M Twitter accounts.

This repository is a gift to the ENS DAO. The DAO may use the list of Twitter accounts as it sees fit, e.g. to organize a further $ENS airdrop using funds from the ENS treasury.

## Notes

1) All Twitter accounts that follow or are followed by one of [the thousands of ultra sound fam members](https://ultrasound.money/#join-the-fam) are part of the source database.
2) It takes a few days for the scrapers to exhaustively scrape all Ethereum Twitter accounts. This means a minority of accounts (ones that very recently added their ENS to their profile and follow or are followed by few ultra sound fam members) may be not be included.
3) The regex used to filter ENS Twitter accounts is `/\.eth|\.𝚎𝚝𝚑|\.Ξth|\.⟠|dot eth/i`. This means there will some be false positives that need further filtering.
4) The script used to build the JSON dump is available at [ens_gift.js](https://github.com/ultrasoundmoney/ens_twitter_accounts/blob/main/ens_gift.js).
