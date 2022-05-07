require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/shopItem');

(async function () {

    await Category.deleteMany({});
    const categories = await Category.create([
        { name: 'Lights', sortOrder: 10 },
        { name: 'Mat', sortOrder: 20 },
        { name: 'Rear View Mirror', sortOrder: 30 },
        { name: 'Car Jack', sortOrder: 40 },
    ]);

    await Item.deleteMany({});
    const items = await Item.create([
        { name: 'Type S Accessories Blue Micro Light Kit', category: categories[0], price: 29.99, img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTyN54LwosaXXOkJmORC_seFZFbP0H16xssai-X5RqlRRqQibn2z2DLdzC6uSZ7fcwoV_eD8urDcM_e4EgRoxHq-EwqwybF3aIEWqN3-aLs&usqp=CAc' },
        { name: 'TYPE S Red micro light kit', category: categories[0], price: 29.99, img: 'https://contentinfo.autozone.com/znetcs/product-info/en/US/wpl/LM57505-606/image/2/' },
        { name: 'TYPE S Smart exterior trim lighting kit', category: categories[0], price: 58.99, img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSgIoV3VVcrPS1JbytrBmIBVO4udcNVz8WfQC6HLDco12ahfK-_osQzKtOKsRH2bymAvvak6KWDPk4JPmRLG7MNalKZFRvA6oRKIBLSmnaD&usqp=CAc' },
        { name: 'Lloyd Mat Rubbertite Direct Fit Floor Mat', category: categories[1], price: 84.99, img: 'https://contentinfo.autozone.com/znetcs/product-info/en/US/lld/140711/image/2/' },
        { name: 'Lloyd Mat Luxe Direct Fit Floor Mat', category: categories[1], price: 160.99, img: 'https://contentinfo.autozone.com/znetcs/product-info/en/US/lld/136208/image/2/' },
        { name: 'WeatherTech Floor Mat 468861', category: categories[1], price: 25.95, img: 'https://contentinfo.autozone.com/znetcs/product-info/en/US/wtr/468861/image/2/' },
        { name: 'Pilot 10in Day and Night Rear View Mirror', category: categories[2], price: 19.99, img: 'https://contentinfo.autozone.com/znetcs/product-info/en/US/pil/MI-004/image/2/' },
        { name: 'Pilot 8in Day and Night Rear View Mirror', category: categories[2], price: 16.99, img: 'https://contentinfo.autozone.com/znetcs/product-info/en/US/pil/MI-009/image/2/' },
        { name: 'Pilot 11in Curved Rear View Mirror,Wide Angle,Panoramic', category: categories[2], price: 3.95, img: 'https://contentinfo.autozone.com/znetcs/product-info/en/US/pil/MI-470/image/2/' },
        { name: 'Duralast 2 Ton Trolley Jack', category: categories[3], price: 53.99, img: 'https://contentinfo.autozone.com/znetcs/product-info/en/US/tor/80620T/image/2/' },
        { name: 'Duralast 2.5 Ton Hydraulic Floor Jack', category: categories[3], price: 89.99, img: 'https://contentinfo.autozone.com/znetcs/product-info/en/US/tor/80627T/image/2/' },
        { name: 'Duralast 2.25 Ton Jack and Stand Kit', category: categories[3], price: 99.99, img: 'https://contentinfo.autozone.com/znetcs/product-info/en/US/tor/T82453/image/2/' },

    ]);

    console.log(items)

    process.exit();

})();