const postgres = require('postgres')
const fs = require('fs')

const sql = postgres({
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    username: process.env.PGUSER,
    port: process.env.PGPORT,
    ssl: 'prefer',
    max: 2,
    connection: {
        application_name: 'script',
    },
    idle_timeout: 30,
})

let ens_regex = /\.eth|\.𝚎𝚝𝚑|\.Ξth|\.⟠|dot eth/i
let ens_fam = []

function process_batch(accounts) {
    accounts.forEach(function(account) {
        if(
            account.name?.match(ens_regex) ||
            account.bio?.match(ens_regex) ||
            account.location?.match(ens_regex)
        ) {
            ens_fam.push({
                id: account.twitter_id,
                handle: account.handle,
                name: account.name,
                bio: account.bio,
                location: account.location,
            })
        }
    })
}

(async function() {
    let total_processed = 0

    await sql`
        SELECT * FROM twitter_accounts ORDER BY handle
    `.cursor(10000, async (batch) => {
        process_batch(batch)
        total_processed += batch.length
        console.log(total_processed, 'processed')
    })

    console.log(ens_fam.length)

    fs.writeFile('./processed/ens_fam.json', JSON.stringify(ens_fam, null, '  '), function (err) {
        if (err) console.log(err)
    })
}())
