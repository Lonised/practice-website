const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://daniilshterkel05:2680@practice.c1rrymd.mongodb.net/?retryWrites=true&w=majority&appName=practice";
const client = new MongoClient(uri);

const products = [
    {
        "id": 1,
        "name": "Portland Cement M500",
        "price": 2500,
        "category": "Building Materials",
        "inStock": true,
        "image": "/assets/productsIMG/portland_cement_m500.webp",
        "bestSeller": true,
        "quantity": 150,
        "recommendation": true,
        "description": "High-strength Portland Cement M500 suitable for various construction works including foundations, slabs, and masonry. Ensures durability and fast setting.",
        "comments": [
            {
                "user": "Builder Pro",
                "comment": "Excellent quality cement. Sets quickly and holds strong. Perfect for foundation work.",
                "rating": 5
            },
            {
                "user": "DIY Master",
                "comment": "Good product overall. A bit dusty during mixing, but performance is great.",
                "rating": 4
            }
        ]
    },
    {
        "id": 2,
        "name": "Red Clay Brick",
        "price": 70,
        "category": "Building Materials",
        "inStock": true,
        "image": "/assets/productsIMG/red_clay_brick.webp",
        "bestSeller": false,
        "quantity": 5000,
        "recommendation": true,
        "description": "Durable red clay bricks perfect for external and internal walls. High thermal and sound insulation.",
        "comments": [
            {
                "user": "Mason Expert",
                "comment": "Solid bricks with minimal defects. Easy to work with.",
                "rating": 5
            }
        ]
    },
    {
        "id": 3,
        "name": "Reinforcing Steel Bar (Rebar) 12mm",
        "price": 950,
        "category": "Metal",
        "inStock": true,
        "image": "/assets/productsIMG/rebar_12mm.webp",
        "bestSeller": true,
        "quantity": 800,
        "recommendation": true,
        "description": "High-grade steel rebar 12mm for concrete reinforcement. Resistant to bending and corrosion.",
        "comments": [
            {
                "user": "Site Foreman",
                "comment": "Complies with GOST standards. Reliable and easy to cut.",
                "rating": 5
            }
        ]
    },
    {
        "id": 4,
        "name": "Gypsum Board 12.5mm",
        "price": 1350,
        "category": "Drywall",
        "inStock": true,
        "image": "/assets/productsIMG/gypsum_board.webp",
        "bestSeller": false,
        "quantity": 300,
        "recommendation": true,
        "description": "Standard gypsum board for walls and ceilings. Fire-resistant and easy to install.",
        "comments": [
            {
                "user": "InteriorPro",
                "comment": "Lightweight and smooth. Great for partition walls.",
                "rating": 4
            }
        ]
    },
    {
        "id": 5,
        "name": "Mineral Wool Insulation Roll",
        "price": 1800,
        "category": "Insulation",
        "inStock": true,
        "image": "/assets/productsIMG/mineral_wool.webp",
        "bestSeller": true,
        "quantity": 200,
        "recommendation": true,
        "description": "Eco-friendly thermal insulation with excellent soundproofing. Fire-resistant and easy to cut.",
        "comments": [
            {
                "user": "GreenBuilder",
                "comment": "Great insulation. Keeps rooms warm in winter.",
                "rating": 5
            }
        ]
    },
    {
        "id": 6,
        "name": "Polyethylene Vapor Barrier Film",
        "price": 950,
        "category": "Waterproofing",
        "inStock": true,
        "image": "/assets/productsIMG/vapor_barrier.webp",
        "bestSeller": false,
        "quantity": 400,
        "recommendation": false,
        "description": "Protects insulation and structures from condensation. Ideal for roofing and walls.",
        "comments": [
            {
                "user": "RoofMaster",
                "comment": "Good for the price. Used it under metal roofing.",
                "rating": 4
            }
        ]
    },
    {
        "id": 7,
        "name": "Self-Leveling Floor Compound",
        "price": 2300,
        "category": "Flooring",
        "inStock": true,
        "image": "/assets/productsIMG/self_leveling.webp",
        "bestSeller": true,
        "quantity": 180,
        "recommendation": true,
        "description": "Creates smooth, durable base layers for flooring. Fast drying and crack-resistant.",
        "comments": [
            {
                "user": "Floorman",
                "comment": "Easy to mix and pour. Surface looks great.",
                "rating": 5
            }
        ]
    },
    {
        "id": 8,
        "name": "Ceramic Tile 30x30cm",
        "price": 2800,
        "category": "Tile",
        "inStock": true,
        "image": "/assets/productsIMG/ceramic_tile.webp",
        "bestSeller": false,
        "quantity": 1200,
        "recommendation": true,
        "description": "Durable and stylish ceramic tiles for bathrooms and kitchens. Moisture-resistant surface.",
        "comments": [
            {
                "user": "Home Reno",
                "comment": "Color matched perfectly. Easy to clean.",
                "rating": 4
            }
        ]
    },
    {
        "id": 9,
        "name": "OSB Board 9mm",
        "price": 1600,
        "category": "Panels",
        "inStock": true,
        "image": "/assets/productsIMG/osb_board.webp",
        "bestSeller": false,
        "quantity": 250,
        "recommendation": true,
        "description": "Oriented strand board ideal for wall and roof sheathing. High load capacity.",
        "comments": [
            {
                "user": "WoodCrafter",
                "comment": "Tough and versatile. Used for shed walls.",
                "rating": 5
            }
        ]
    },
    {
        "id": 10,
        "name": "PVC Pipe 50mm",
        "price": 600,
        "category": "Plumbing",
        "inStock": true,
        "image": "/assets/productsIMG/pvc_pipe.webp",
        "bestSeller": false,
        "quantity": 700,
        "recommendation": false,
        "description": "Durable PVC pipe for water supply and drainage systems. Resistant to corrosion.",
        "comments": [
            {
                "user": "PlumbIt",
                "comment": "Decent quality. Used for bathroom drainage.",
                "rating": 4
            }
        ]
    },
    {
        "id": 11,
        "name": "Acrylic White Paint (10L)",
        "price": 4500,
        "category": "Paint",
        "inStock": true,
        "image": "/assets/productsIMG/acrylic_paint.webp",
        "bestSeller": true,
        "quantity": 100,
        "recommendation": true,
        "description": "Interior white acrylic paint with excellent coverage and fast drying time.",
        "comments": [
            {
                "user": "Decorator88",
                "comment": "Covers well in one coat. No strong smell.",
                "rating": 5
            }
        ]
    },
    {
        "id": 12,
        "name": "Metal Roofing Sheet (0.5mm)",
        "price": 3500,
        "category": "Roofing",
        "inStock": true,
        "image": "/assets/productsIMG/metal_roofing.webp",
        "bestSeller": true,
        "quantity": 600,
        "recommendation": true,
        "description": "Galvanized metal roofing sheets with anti-corrosion coating. Durable and weather-resistant.",
        "comments": [
            {
                "user": "RoofingExpert",
                "comment": "High quality and easy to install. Looks great on the house.",
                "rating": 5
            }
        ]
    },
    {
        "id": 13,
        "name": "Construction Foam (750ml)",
        "price": 950,
        "category": "Sealants",
        "inStock": true,
        "image": "/assets/productsIMG/foam_sealant.webp",
        "bestSeller": false,
        "quantity": 900,
        "recommendation": true,
        "description": "Polyurethane foam for filling gaps and sealing joints. Expands quickly and hardens fast.",
        "comments": [
            {
                "user": "SealerMax",
                "comment": "Does the job. Used it around windows and doors.",
                "rating": 4
            }
        ]
    },
    {
        "id": 14,
        "name": "Wall Primer (5L)",
        "price": 2000,
        "category": "Paint",
        "inStock": true,
        "image": "/assets/productsIMG/wall_primer.webp",
        "bestSeller": false,
        "quantity": 300,
        "recommendation": true,
        "description": "Deep-penetrating primer for interior walls. Increases adhesion of paint and plaster.",
        "comments": [
            {
                "user": "PainterPro",
                "comment": "Excellent base coat. Paint holds much better now.",
                "rating": 5
            }
        ]
    },
    {
        "id": 15,
        "name": "Electric Cable NYM 3x2.5mm² (100m)",
        "price": 12500,
        "category": "Electrical",
        "inStock": true,
        "image": "/assets/productsIMG/electric_cable.webp",
        "bestSeller": true,
        "quantity": 120,
        "recommendation": true,
        "description": "Flexible copper cable for residential electrical installations. Fire- and moisture-resistant.",
        "comments": [
            {
                "user": "ElectroFix",
                "comment": "Reliable and safe. Used in full home wiring.",
                "rating": 5
            }
        ]
    },
    {
        "id": 16,
        "name": "Double-Glazed Window 120x140cm",
        "price": 25000,
        "category": "Windows",
        "inStock": true,
        "image": "/assets/productsIMG/double_glazed_window.webp",
        "bestSeller": true,
        "quantity": 80,
        "recommendation": true,
        "description": "Energy-efficient PVC window with sound insulation. Suitable for homes and offices.",
        "comments": [
            {
                "user": "WindowTech",
                "comment": "Keeps warmth inside and noise outside. Great product.",
                "rating": 5
            }
        ]
    },
    {
        "id": 17,
        "name": "Granite Paving Slab 60x60cm",
        "price": 3800,
        "category": "Outdoor",
        "inStock": true,
        "image": "/assets/productsIMG/granite_slab.webp",
        "bestSeller": false,
        "quantity": 350,
        "recommendation": true,
        "description": "Granite paving tiles for sidewalks, patios, and driveways. Strong and weatherproof.",
        "comments": [
            {
                "user": "LandscaperMan",
                "comment": "Looks beautiful and holds weight well. Very durable.",
                "rating": 5
            }
        ]
    },
    {
        "id": 18,
        "name": "Adhesive for Tiles (25kg)",
        "price": 1400,
        "category": "Adhesives",
        "inStock": true,
        "image": "/assets/productsIMG/tile_adhesive.webp",
        "bestSeller": false,
        "quantity": 700,
        "recommendation": true,
        "description": "Strong adhesive mix for wall and floor tiles. Good elasticity and water resistance.",
        "comments": [
            {
                "user": "TileMaster",
                "comment": "No slipping. Great grip even on vertical surfaces.",
                "rating": 5
            }
        ]
    },
    {
        "id": 19,
        "name": "Ladder Aluminum 6-Step",
        "price": 9700,
        "category": "Tools",
        "inStock": true,
        "image": "/assets/productsIMG/ladder_aluminum.webp",
        "bestSeller": false,
        "quantity": 110,
        "recommendation": true,
        "description": "Lightweight aluminum ladder for construction and home use. Anti-slip steps and foldable.",
        "comments": [
            {
                "user": "HandyMan",
                "comment": "Very light and stable. Easy to store.",
                "rating": 5
            }
        ]
    },
    {
        "id": 20,
        "name": "Wheelbarrow 100L",
        "price": 11500,
        "category": "Tools",
        "inStock": true,
        "image": "/assets/productsIMG/wheelbarrow.webp",
        "bestSeller": true,
        "quantity": 95,
        "recommendation": true,
        "description": "Heavy-duty construction wheelbarrow for transporting materials. Solid rubber tire and strong frame.",
        "comments": [
            {
                "user": "SiteMover",
                "comment": "Handles heavy loads with ease. Essential on the job site.",
                "rating": 5
            }
        ]
    }
];

async function run() {
  try {
    await client.connect();
    const db = client.db("store"); 
    const collection = db.collection("products"); 

    const result = await collection.insertMany(products);
    console.log(`Inserted ${result.insertedCount} products`);
  } catch (err) {
    console.error("Error inserting documents:", err);
  } finally {
    await client.close();
  }
}

run();
