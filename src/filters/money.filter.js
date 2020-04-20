export default function moneyFilter(value) {
    return new Intl.NumberFormat("ru-RU", {
        minimumFractionDigits: 0
    }).format(value)
}