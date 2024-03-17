// The oracle_challenge.aleo program defines a smart contract for managing token price feeds with access control.
program oracle_challenge.aleo {

    // Defines a Token struct with price, decimals, and timestamp.
    struct Token {
        price: u64,
        decimals: u8, 
        timestamp: u64
    }

    // Represents the price feeds for different tokens.
    mapping priceFeeds: field => Token;

    // Indicates whether the address has access to update price feeds.
    mapping hasAccess: address => bool;

    // Updates the price feed for a given token. Only accessible by addresses with granted access.
    // @param id The identifier for the token whose price feed is to be updated.
    // @param token The new Token data to update the price feed with.
    transition updatePriceFeed(id: field, token: Token) {
        return then finalize(id, token, self.caller);
    }

    // Finalizes the updatePriceFeed transition, performing the update if the caller is authorized.
    // @param id The identifier for the token whose price feed is to be updated.
    // @param token The new Token data to update the price feed with.
    // @param caller The address attempting to update the price feed.
    finalize updatePriceFeed(id: field, token: Token, caller: address) {
        let verifiedOracle: bool = Mapping::get_or_use(hasAccess, caller, false); // Checks if the caller has access to update.
        assert(verifiedOracle); // Asserts that the caller is authorized to update the price feed.
        Mapping::set(priceFeeds, id, token); // Updates the price feed with the new Token data.
    }

    // Grants access to an address, allowing it to update price feeds.
    // @param oracle The address to be granted access.
    transition grantAccess(oracle: address) {
        assert_eq(self.caller, aleo1n6sr5hta49jdvprywz3nq08m4a6zuw2wkzyt8l8849yzgf2xuyqsu5sx77); // Ensures only the contract owner can grant access.
        return then finalize(oracle);
    }

    // Finalizes the grantAccess transition, granting update access to the specified address.
    // @param oracle The address to be granted update access.
    finalize grantAccess(oracle: address) {
        Mapping::set(hasAccess, oracle, true); // Sets the address as authorized in the hasAccess mapping.
    }
}
