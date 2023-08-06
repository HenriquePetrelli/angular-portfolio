export function getRangeDate(inicialDate: string, finalDate: string | null) {
  let primeiraData = new Date(inicialDate);

  let segundaData = finalDate ? new Date(finalDate) : new Date();
  let diferencaMilissegundos = segundaData.getTime() - primeiraData.getTime();

  let umDiaEmMilissegundos = 1000 * 60 * 60 * 24;
  let umMesEmMilissegundos = umDiaEmMilissegundos * 30.436875; // Aproximadamente a média de dias por mês

  let yearNumber = Math.floor(
    diferencaMilissegundos / (umDiaEmMilissegundos * 365)
  );
  let monthNumber =
    Math.floor(diferencaMilissegundos / umMesEmMilissegundos) % 12;

  let text = '';

  return { yearNumber, monthNumber };
  // let textAnos = getYearText(diferencaAnos);
  // let textMeses = getMonthText(diferencaMeses);

  // if (diferencaAnos > 0 && diferencaMeses > 0) {
  //   text = `${textAnos} e ${textMeses}`;
  // } else if (diferencaAnos > 0) {
  //   text = textAnos;
  // } else {
  //   text = textMeses;
  // }
  // return text;
}

function getYearText(diferencaAnos: number) {
  let text = '';
  if (diferencaAnos === 1) text = `${diferencaAnos.toString()} ano`;
  if (diferencaAnos > 1) text = `${diferencaAnos.toString()} anos`;

  return text;
}

function getMonthText(diferencaMeses: number) {
  let text = '';
  if (diferencaMeses === 1) text = `${diferencaMeses.toString()} mês`;
  if (diferencaMeses > 1) text = `${diferencaMeses.toString()} meses`;

  return text;
}
