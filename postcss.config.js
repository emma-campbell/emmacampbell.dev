const tailwdindcss = require('tailwindcss');
module.exports = {
    plugins: [
        tailwdindcss('./tailwind.js'),
        require('autoprefixer')
    ],
};