program oracle_challenge.aleo;

struct Token:
    price as u64;
    decimals as u8;
    timestamp as u64;


mapping priceFeeds:
	key as field.public;
	value as Token.public;


mapping hasAccess:
	key as address.public;
	value as boolean.public;

function updatePriceFeed:
    input r0 as field.private;
    input r1 as Token.private;
    async updatePriceFeed r0 r1 self.caller into r2;
    output r2 as oracle_challenge.aleo/updatePriceFeed.future;

finalize updatePriceFeed:
    input r0 as field.public;
    input r1 as Token.public;
    input r2 as address.public;
    get.or_use hasAccess[r2] false into r3;
    assert.eq r3 true;
    set r1 into priceFeeds[r0];


function grantAccess:
    input r0 as address.private;
    assert.eq self.caller aleo1k4vlpnjzkujqjsrf4slp3hfzealzkrwhp2m3awyretlm7tp8t5qsxay3yf;
    async grantAccess r0 into r1;
    output r1 as oracle_challenge.aleo/grantAccess.future;

finalize grantAccess:
    input r0 as address.public;
    set true into hasAccess[r0];
