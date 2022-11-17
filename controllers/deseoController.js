const Producto = require("../models/Producto");

exports.creardeseo = async (req, res)=>{
    try {
        let producto = new Producto(req.body);
        await producto.save();
        res.send(producto);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
exports.obtenerdeseos = async(req, res) =>{
    try {
        const productos = await Producto.find();
        res.json(productos);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')  
    }
}
exports.actualizardeseo = async(req, res) =>{
    try {
        const{nombrep}= req.body;
        let producto = await Producto.findById(req.params.id);
        if(!producto){
            res.status(404).json({msg:'No existe el producto'})
        }
        producto.nombrep = nombrep;
        producto = await Producto.findByIdAndUpdate({_id: req.params.id}, producto, {new:true})
        res.json(producto)


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')  
    }
}
exports.obtenerproducto = async(req, res) =>{
    try {
        
        let producto = await Producto.findById(req.params.id);
        if(!producto){
            res.status(404).json({msg:'No existe el producto'})
        }
        res.json(producto)


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')  
    }
}
exports.eliminarproducto = async(req, res) =>{
    try {
        
        let producto = await Producto.findById(req.params.id);
        if(!producto){
            res.status(404).json({msg:'No existe el producto'})
        }
        await Producto.findOneAndRemove({_id: req.params.id });
        res.json({msg: 'Producto eliminado con exito'})


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')  
    }
}