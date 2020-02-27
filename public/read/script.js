//let imgs = [
//  '(wrapKA("GSQogQht4SH2o7UV1H2KJ61Ny53c2ikhTxYDiYD2NJMACRUs9rVsByuc88R82Joz"))',
//  '(wrapKA("GSQogQht4SH2o7UV1H2KJ61Ny53c2ikhTxYDiYD2NJNPp9Bv1yCZcGRRaJPh7pok"))',
//  '(wrapKA("GSQogQht4SH2o7UV1H2KJ61Ny53c2ikhTxYDiYD2NJMAiM56QQ9WlzREMaXTdaQ+"))',
//  '(wrapKA("GSQogQht4SH2o7UV1H2KJ61Ny53c2ikhTxYDiYD2NJMtIO8ScuhuW098bPO9ZW7+"))',
//  '(wrapKA("GSQogQht4SH2o7UV1H2KJ61Ny53c2ikhTxYDiYD2NJO67COYgfuEeCJYBkAdvMFM"))',
//  '(wrapKA("GSQogQht4SH2o7UV1H2KJ61Ny53c2ikhTxYDiYD2NJNpLEH4Vqs8zlbF1BvH+dYb"))',
//  '(wrapKA("GSQogQht4SH2o7UV1H2KJ61Ny53c2ikhTxYDiYD2NJPNY3GZh4u1vO7/C/7AmGqw"))',
//  '(wrapKA("GSQogQht4SH2o7UV1H2KJ61Ny53c2ikhTxYDiYD2NJPiSgtBu/vn9VHJxHtR7uSi"))',
//  '(wrapKA("GSQogQht4SH2o7UV1H2KJ61Ny53c2ikhTxYDiYD2NJMPNc5G21COnxDeWwKTb0ln"))',
//  '(wrapKA("GSQogQht4SH2o7UV1H2KJ61Ny53c2ikhTxYDiYD2NJMqvFVGlGj22tgiyBa4j5ZZ"))',
//  '(wrapKA("GSQogQht4SH2o7UV1H2KJ61Ny53c2ikhTxYDiYD2NJNmO6hKz/FUDH5cgfE2+D0D"))',
//  '(wrapKA("GSQogQht4SH2o7UV1H2KJ61Ny53c2ikhTxYDiYD2NJONwKr9qKDqBlBmZucf3q5h"))',
//  '(wrapKA("GSQogQht4SH2o7UV1H2KJ61Ny53c2ikhTxYDiYD2NJNVk3OfCwYQWzPnE87h4Px8"))',
//  '(wrapKA("GSQogQht4SH2o7UV1H2KJ61Ny53c2ikhTxYDiYD2NJNhvhjNUMnKXHhiU8AuS8HJ"))',
//  '(wrapKA("GSQogQht4SH2o7UV1H2KJ61Ny53c2ikhTxYDiYD2NJOWIMuQS1SUBJiddKcwSTim"))',
//  '(wrapKA("GSQogQht4SH2o7UV1H2KJ61Ny53c2ikhTxYDiYD2NJPwUIWIXdlVmogVu97lhpkc"))',
//  '(wrapKA("GSQogQht4SH2o7UV1H2KJ61Ny53c2ikhTxYDiYD2NJMt/A5XbYoBQGC9ehHgK3Gf"))',
//  '(wrapKA("GSQogQht4SH2o7UV1H2KJ61Ny53c2ikhTxYDiYD2NJN1P1Rl/U17TkDR/7ta2zE6"))',
//  '(wrapKA("GSQogQht4SH2o7UV1H2KJ61Ny53c2ikhTxYDiYD2NJN867oht+opYr74w8B6n9/B"))',
//  '(wrapKA("GSQogQht4SH2o7UV1H2KJ61Ny53c2ikhTxYDiYD2NJM/ud1IrhEKhA7OPQCRhv6/"))',
//  '(wrapKA("GSQogQht4SH2o7UV1H2KJ61Ny53c2ikhTxYDiYD2NJNvTR9rt0OOdWKDx/zE1yXu"))',
//  '(wrapKA("GSQogQht4SH2o7UV1H2KJ61Ny53c2ikhTxYDiYD2NJPhMe0wwRPFO47AdIK297wD"))',
//  '(wrapKA("GSQogQht4SH2o7UV1H2KJ61Ny53c2ikhTxYDiYD2NJPOk7wyElvXENaAj1jvfWc6"))',
//  '(wrapKA("GSQogQht4SH2o7UV1H2KJ61Ny53c2ikhTxYDiYD2NJNXxVFMHLxoFH/PPUaA1jT3"))',
//  '(wrapKA("GSQogQht4SH2o7UV1H2KJ61Ny53c2ikhTxYDiYD2NJN1573mpnH7y5nhyHzu6iYA"))',
//  '(wrapKA("GSQogQht4SH2o7UV1H2KJ61Ny53c2ikhTxYDiYD2NJPPpHrMH0+fhXJ7dgT1wnpj"))',
//  '(wrapKA("GSQogQht4SH2o7UV1H2KJ61Ny53c2ikhTxYDiYD2NJOpFR5B83bhnUHNrZGFErlx"))',
//  '(wrapKA("GSQogQht4SH2o7UV1H2KJ61Ny53c2ikhTxYDiYD2NJOix2fAJamLItGp12KEgmEf"))',
//  '(wrapKA("GSQogQht4SH2o7UV1H2KJ61Ny53c2ikhTxYDiYD2NJMrkTz6pq37MZ5gd01u0esK"))'
//]

let imgs = fetch('http://localhost:7883/3')

var container = document.getElementById('imageContainer');
var docFrag = document.createDocumentFragment();

imgs.forEach(function(url, index, originalArray) {
    var img = document.createElement('img');
    img.src = 'http:' + eval(url);
    docFrag.appendChild(img);
});

container.appendChild(docFrag);
