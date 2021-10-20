const router = require("express").Router();
const { allBook, oneBook, addBook, editBook, deleteBook, deleteAllBook } = require("../utils/book");

// routes operating on ALL book resources
router.get("/", async (req, res) => {
    res.status(200).json({msg:"All Book", data: await allBook()});
});

router.post("/", async (req, res) => {
    res.status(201).json({msg:"Add a Book", data: await addBook(req.body)});
});

router.delete("/", async (req, res) => {
    res.status(200).json({msg:"Delete all Book", data: await deleteAllBook()});
});

// Routers operating on ONE specific book resource
router.get("/:id", async (req, res) => {
    res.status(200).json({msg:"One Book", data: await oneBook(req.params.id)});
});

router.put("/:id", async (req, res) => {
    res.status(200).json({msg:"Edit one Book", data: await editBook({id: req.params.id,
                                                                    name: req.body.name || undefined,
                                                                    author: req.body.author || undefined
                                                                }
    )});
});

router.delete("/:id", async (req, res) => {
    res.status(200).json({msg:"Delete one Book", data: await deleteBook(req.params.id)});
});

module.exports = router;