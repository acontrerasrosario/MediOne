async function get_patient_info(req,res){
    res.status(200).json({ resultado: 'Resultado de paciente'})
}

module.exports = {
    get_patient_info: get_patient_info,
}