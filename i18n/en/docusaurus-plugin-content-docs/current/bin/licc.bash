# Erstellt eine Partie für zwei beliebige Spieler. Wird ohne oder mit genau 2 Parametern aufgerufen.

# $1: Limit: Gesamtbedenkzeit in Sekunden. Default ist unlimitiert.
# $2: Increment: Inkrement pro Zug in Sekunden. Default ist unlimitiert.

echo 'Bedenkzeit in Sekunden: '$1''
echo "Inkrement in Sekunden: $2"

if [[ $# -eq 0 ]]
   then
           curl -v -H "Content-Type: application/json" -X POST -d '{ }' https://lichess.org/api/challenge/open
           exit 0
fi

curl -v -H "Content-Type: application/json" -X POST -d '{"clock.limit":'$1', "clock.increment":'$2' }' https://lichess.org/api/challenge/open
