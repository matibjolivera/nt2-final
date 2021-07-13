import Vue from 'vue';

Vue.filter('toUpperCase', function (value) {
    return value.toUpperCase()
});

Vue.filter('toLowerCase', function (value) {
    return value.toLowerCase()
});

Vue.filter('encoded', function (value) {
    for (let i = 0; i < value.length; i++) {
        let char = value.charAt(i);
        let newChar = null;
        switch (char) {
            case 'a':
                newChar = 'u'
                break
            case 'e':
                newChar = 'o'
                break
            case 'o':
                newChar = 'e'
                break
            case 'u':
                newChar = 'a'
                break
        }
        if (newChar) {
            value = value.substring(0, i) + newChar + value.substring(i + 1)
        }
    }
    return value
})

Vue.filter('interspersedUpper', function (value) {
    for (let i = 0; i < value.length; i++) {
        let char = value.charAt(i);
        let newChar = null;
        if (i === 0 || i % 2 === 0) {
            newChar = char.toUpperCase()
        } else {
            newChar = char.toLowerCase()
        }
        value = value.substring(0, i) + newChar + value.substring(i + 1)
    }
    return value
})

Vue.filter('interspersedLower', function (value) {
    for (let i = 0; i < value.length; i++) {
        let char = value.charAt(i);
        let newChar = null;
        if (i === 0 || i % 2 === 0) {
            newChar = char.toLowerCase()
        } else {
            newChar = char.toUpperCase()
        }
        value = value.substring(0, i) + newChar + value.substring(i + 1)
    }
    return value
});