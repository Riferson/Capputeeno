export function FormatPrice(ValueCents: number){
    const valueReal = ValueCents / 100;
    return valueReal.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})
}