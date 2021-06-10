
export const indics = ["eco","art","soc","knw","dis","geq","ghg","mat","was","nrg","wat","haz"];

export const indicateurs = {
    code: {
        art: 'ART',
        dis: 'DIS',
        eco: 'ECO',
        geq: 'GEQ',
        ghg: 'GHG',
        haz: 'HAZ',
        knw: 'KNW',
        mat: 'MAT',
        nrg: 'NRG',
        soc: 'SOC',
        was: 'WAS',
        wat: 'WAT'
    },
    libelle : {
        art: 'Contribution aux Métiers d\'art & aux Savoir-faire',
        dis: 'Indice de Répartition des Rémunérations',
        eco: 'Contribution à l\'Economie Nationale',
        geq: 'Indice d\'Ecart des Rémunérations Femmes/Hommes',
        ghg: 'Intensité d\'Emission de Gaz à Effet de Serre',
        haz: 'Intensité d\'Utilisation de Produits dangereux pour la Santé et l\'Environnement',
        knw: 'Contribution à l\'Evolution des Compétences et des Connaissances',
        mat: 'Intensité d\'Extraction de Matières Premières',
        nrg: 'Intensité de Consommation d\'Energie',
        soc: 'Contribution aux Acteurs d\'Intérêt social',
        was: 'Intensité de Production de Déchets',
        wat: 'Intensité de Consommation d\'Eau'
    },
    odd_img : {
        art: '/resources/odd_art.png',
        dis: '/resources/odd_dis.png',
        eco: '/resources/odd_eco.png',
        geq: '/resources/odd_geq.png',
        ghg: '/resources/odd_ghg.png',
        haz: '/resources/odd_haz.png',
        knw: '/resources/odd_knw.png',
        mat: '/resources/odd_mat.png',
        nrg: '/resources/odd_nrg.png',
        soc: '/resources/odd_soc.png',
        was: '/resources/odd_was.png',
        wat: '/resources/odd_wat.png'
    },
    description: {
        art: 'Part de la valeur produite par des entreprises artisanales, créatives ou dont le savoir-faire est reconnu',
        dis: 'Indice de GINI',
        eco: 'Part de la valeur produite en France',
        geq: 'Ecart de la rémunération moyenne Femmes/Hommes',
        ghg: 'Quantité émise de gaz à effet de serre par unité de valeur',
        haz: 'Quantité utilisée de produits dangereux pour la santé et/ou l\'environnement par unité de valeur',
        knw: 'Part de la valeur produite dédiée à la formation, la recherche ou l\'enseignement',
        mat: 'Quantité extraite de matières premières (matières biologiques, biomasse, matières fossiles et minerais) par unité de valeur',
        nrg: 'Quantité consommée d\'énergie par unité de valeur',
        soc: 'Part de la valeur produite par des structures de l\'ESS ou des entreprises à mission',
        was : 'Quantité produite de déchets par unité de valeur',
        wat: 'Quantité consommée d\'eau par unité de valeur'
    },
    unit: {
        art: 'En % de la valeur',
        dis: 'Base 100 où 0 correspond à une égalité parfaite',
        eco: 'En % de la valeur',
        geq: 'En % de la rémunération moyenne',
        ghg: 'En gramme de CO2 équivalent par euro (gCO2e/€)',
        haz: 'En gramme par euro (g/€)',
        knw: 'En % de la valeur',
        mat: 'En gramme par euro (g/€)',
        nrg: 'En kilojoule par euro (kJ/€)',
        soc: 'En % de la valeur',
        was: 'En gramme par euro (g/€)',
        wat: 'En litre par euro (L/€)'
    },
    unitCode: {
        art: '%',
        dis: '/100',
        eco: '%',
        geq: '%',
        ghg: 'gCO2e/€',
        haz: 'g/€',
        knw: '%',
        mat: 'g/€',
        nrg: 'kJ/€',
        soc: '%',
        was: 'g/€',
        wat: 'L/€'
    },
    unitAbsoluteCode: {
        art: '€',
        dis: '/100',
        eco: '€',
        geq: '%',
        ghg: 'kgCO2e',
        haz: 'kg',
        knw: '€',
        mat: 'kg',
        nrg: 'MJ',
        soc: '€',
        was: 'kg',
        wat: 'm3'
    },
    defaultUncertainty: {
        art: 0,
        dis: 0,
        eco: 0,
        geq: 0,
        ghg: 50,
        haz: 50,
        knw: 0,
        mat: 50,
        nrg: 50,
        soc: 0,
        was: 50,
        wat: 25
    },
    descriptionImpactDirect: {
        art: 'Valeur ajoutée correspondante à des activites artisanales',
        dis: 'Indice de GINI des taux horaires bruts',
        eco: 'Valeur ajoutée produite en France',
        geq: 'Ecart de rémunération femmes/hommes',
        ghg: 'Emissions directes de gaz à effet de serre',
        haz: 'Quantité utilisée de produits dangereux',
        knw: 'Rémunérations liées à des activités de recherche ou de formation',
        mat: 'Quantité extraite de matières premières',
        nrg: 'Quantité consommée d\'énergie',
        soc: 'Valeur ajoutée si entreprise de l\'ESS ou ayant une raison d\'être définie dans les statuts, zéro sinon',
        was: 'Quantité produite de déchets',
        wat: 'Quantité consommée d\'eau'
    }
    
}