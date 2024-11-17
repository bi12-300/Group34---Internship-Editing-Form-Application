const { v4: uuidv4 } = require('uuid');
let forms = [];

const createFormController = (req, res) => {
    const { name, description, fields } = req.body;

    if (!name || !fields || !Array.isArray(fields)) {
        return res.status(400).json({ message: 'Invalid input data. Name and fields are required.' });
    }

    const newForm = {
        id: uuidv4(),
        name,
        description: description || '',
        fields,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    };

    forms.push(newForm);
    res.status(201).json(newForm);
};

const getFormByIdController = (req, res) => {
    const { id } = req.params;
    const form = forms.find(f => f.id === id);

    if (!form) {
        return res.status(404).json({ message: 'Form not found.' });
    }

    res.json(form);
};

const updateFormController = (req, res) => {
    const { id } = req.params;
    const { name, description, fields } = req.body;

    const form = forms.find(f => f.id === id);
    if (!form) {
        return res.status(404).json({ message: 'Form not found.' });
    }

    if (name) form.name = name;
    if (description) form.description = description;
    if (fields && Array.isArray(fields)) form.fields = fields;

    form.updatedAt = new Date().toISOString();

    res.json(form);
};

const deleteFormController = (req, res) => {
    const { id } = req.params;
    const index = forms.findIndex(f => f.id === id);

    if (index === -1) {
        return res.status(404).json({ message: 'Form not found.' });
    }

    forms.splice(index, 1);
    res.status(204).send();
};

module.exports = {
    createFormController,
    getFormByIdController,
    updateFormController,
    deleteFormController
};
