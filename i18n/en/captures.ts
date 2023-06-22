export default {
    title: 'CAPTURES',
    filters: {
        searchField: 'Search by  name or product code',
        startDate: 'From',
        endDate: 'To',
        withImage: 'With Photo',
        withoutImage: 'Without Photo',
        statusRejected: 'Rejected',
        normalPrice: 'Normal Price',
        statusPending: 'Pending',
        statusValidated: 'Validated',
        priceWithPromotion: 'Promo Price',
        param: 'Parameter',
        value: 'Value',
        geolocalitation: 'Geolocation',
    },
    actions: {
        search: 'Search',
        cleanFilter: 'Clean Filters',
        exportGeoData: 'Export Geolocation Data',
    },
    optionsCatalog: {
        brandsCatalog: 'Brand',
        groupsCatalog: 'Group',
        linesCatalog: 'Line',
        storesCatalog: 'Branch',
        unitsCatalog: 'Unit',
    },
    table: {
        head: {
            selected: 'Select',
            id: 'Capture',
            photo_main: 'Main Photo',
            photo_price: 'Price Photo',
            barcode: 'Barcode',
            product: 'Product',
            brand: 'Brand',
            type: 'Type',
            chain: 'Commercial Chain',
            branch: 'Branch',
            scanned_by: 'Capturist',
            reviewed: 'Validator',
            status: 'Status',
            grammage_quantity: 'Quantity',
            unit: 'Unit',
            unit_price: 'Unit Price',
            group: 'Group',
            line: 'Line',
            product_created_date: 'Date of Product Registration',
            lower_price: 'Lowest Price',
            highest_price: 'Highest Price',
            capture_date: 'Capture Date',
            capture_price: 'Capture Price',
            actions: 'Actions',
        },
    },

    status: {
        validated: 'Validated',
        pending: 'Pending',
    },

    units: {
        cm: 'Centimeter',
        m: 'Meter',
        ml: 'Mililiters',
        lt: 'Liter',
        mg: 'Miligram',
        g: 'Gram',
        kg: 'Kilogram',
        pieza: 'Piece',
    },

    modal: {
        delete: {
            buttonAcceptLabel: 'Eliminate',
            message: 'This operation is permanent, Do you  want to  eliminate this element?',
        },
    },
};
