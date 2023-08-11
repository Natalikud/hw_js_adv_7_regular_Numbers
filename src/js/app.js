export default function replaceSymbol(str) {
  const str2 = str.replace(/[\W\s]/g, '');
  const str3 = str2.replace(/^[7|8]/, '+$&');
  if (str3.length === 12) {
    return str3.replace(/^(\S\d)/, '+7');
  }

  return str3;
}
