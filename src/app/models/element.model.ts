export interface Element {
  ordnungszahl: number;
  symbol: string;
  name: string;
  atommasse: number;
  aggregatzustand: string;
  kategorie: string;
  siedepunkt: number | null;
  schmelzpunkt: number | null;
  elektronegativitaet: number | null;
  dichte: number | null;
  entdeckt: string;
  oxidationszahlen: string;
  gruppe: number | null;
  periode: number;
}
