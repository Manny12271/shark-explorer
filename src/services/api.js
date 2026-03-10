export const fetchSharks = async () => {

    const response = await fetch(
        "https://api.api-ninjas.com/v1/animals?name=shark",
        {
            headers: {
                "X-Api-Key": "nH342u3iNEt9NfTf4Z9Azpp1vW5suusFnyj7yD9H"
            }
        }
    )

    const data = await response.json()

    return data
}