{
  "status": "00",
  "message": "The process was completed successully",
  "data": {
    "version": "1.0.0",
    "consent_method": "USSD_VALIDATION",
    "participant": {
      "id": "AP0987654321",
      "name": "First Bank of Nigeria",
      "short_name": "First Bank",
      "acronym": "FBN",
      "cbn_code": "011",
      "address": "123, Ajangbadi Street, Lagos",
      "timezone": "UTC",
      "logo_url": "https://example.com/logo.jpg",
      "connection_id": "CONN0987654321"
    },
    "scopes_supported": [
      "transactions.readonly",
      "transactions.airtime",
      "transactions.bills",
      "account",
      "account.balance.readonly",
      "account.beneficiaries.readonly",
      "account.statement.readonly",
      "account.create",
      "account.directdebits",
      "account.directdebits.readonly",
      "account.directdebits.create",
      "account.directdebits.payment",
      "account.directdebits.cancel"
    ],
    "pricing": [
      {
        "scope": "transactions.readonly",
        "price_flat": 20,
        "price_percent": 1,
        "price_cap": 1000
      },
      {
        "scope": "account.directdebits.create",
        "price_flat": 20,
        "price_percent": 1,
        "price_cap": 1000
      },
      {
        "scope": "account.statement.readonly",
        "price_flat": 20,
        "price_percent": 1,
        "price_cap": 1000
      }
    ],
    "participants_supported": [
      {
        "id": "AP0987654321",
        "name": "Zenith Bank",
        "connection_id": "CONN0987654321"
      },
      {
        "id": "AP0987654321",
        "name": "ABC Bank",
        "connection_id": "CONN0987654222"
      }
    ]
  }
}
