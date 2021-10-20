const router = require("express").Router();
const { allCoffee, oneCoffee, addCoffee, editCoffee, deleteCoffee, deleteAllCoffee } = require("../utils/coffee");

// routes operating on ALL coffee resources
router.get("/", async (req, res) => {
    res.status(200).json({msg:"All Coffee", data: await allCoffee()});
});

router.post("/", async (req, res) => {
    res.status(201).json({msg:"Add a Coffee", data: await addCoffee(req.body)});
});

router.delete("/", async (req, res) => {
    res.status(200).json({msg:"Delete all Coffee", data: await deleteAllCoffee()});
});

// Routers operating on ONE specific coffee resource
router.get("/:id", async (req, res) => {
    res.status(200).json({msg:"One Coffee", data: await oneCoffee(req.params.id)});
});

router.put("/:id", async (req, res) => {
    res.status(200).json({msg:"Edit one Coffee", data: await editCoffee({id: req.params.id, 
                                                                        name: req.body.name || undefined,
                                                                        origin: req.body.origin || undefined,
                                                                        strength: req.body.strength || undefined
                                                                    }
    )});
});

router.delete("/:id", async (req, res) => {
    res.status(200).json({msg:"Delete one Coffee", data: await deleteCoffee(req.params.id)});
});

module.exports = router;