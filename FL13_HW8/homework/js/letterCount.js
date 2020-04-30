function letterCount(str1, str2) {
    str1 = str1.toUpperCase();
    str2 = str2.toUpperCase();
    return str1.split(str2).length - 1;
}

letterCount("Maggy", "g");
letterCount("Barry", "b");
letterCount("", "z");