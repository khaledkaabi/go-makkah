import { useState } from 'react';
import { User, Phone, MapPin, FileText, Heart } from 'lucide-react';
import { Select, MenuItem } from "@mui/material";
import TextField from '@mui/material/TextField';

export default function HajjRegistrationForm() {
    const [formData, setFormData] = useState({
        // Informations personnelles
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        gender: '',
        nationality: '',

        // Contact
        phone: '',
        email: '',
        address: '',
        city: '',
        postalCode: '',

        // Documents
        passportNumber: '',
        passportExpiry: '',
        visaType: '',

        // Informations médicales
        medicalConditions: '',
        medications: '',
        emergencyContact: '',
        emergencyPhone: '',

        // Préférences Hajj
        packageType: '',
        roomType: '',
        specialRequests: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Données du formulaire:', formData);
        alert('Formulaire soumis avec succès!');
    };

    return (
        <div className="min-h-screen py-8 px-4">
            <div className="max-w-4xl mx-auto">
                {/* En-tête */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-red-primary text-white rounded-full mb-4">
                        <Heart className="w-8 h-8" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">
                        Inscription Hajj 2025
                    </h1>
                    <p className="text-gray-600">
                        Formulaire d'inscription pour le pèlerinage à La Mecque
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8">
                    {/* Section Informations Personnelles */}
                    <div className="mb-8">
                        <div className="flex items-center mb-6">
                            <User className="w-5 h-5 text-[#2163AE] mr-2" />
                            <h2 className="text-xl font-semibold text-gray-800">Informations Personnelles</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-left text-sm font-medium text-gray-700 mb-2">
                                    Prénom *
                                </label>
                                <TextField
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    className="w-full"
                                    required
                                    size='small'
                                />
                            </div>
                            <div>
                                <label className="block text-left text-sm font-medium text-gray-700 mb-2">
                                    Nom de famille *
                                </label>
                                <TextField
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    className="w-full"
                                    required
                                    size='small'
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <label className="block text-left text-sm font-medium text-gray-700 mb-2">
                                    Date de naissance *
                                </label>
                                <TextField
                                    type="date"
                                    name="dateOfBirth"
                                    value={formData.dateOfBirth}
                                    onChange={handleInputChange}
                                    className="w-full"
                                    required
                                    size='small'
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-left font-medium text-gray-700 mb-2">
                                    Genre *
                                </label>
                                <Select
                                    size='small'
                                    name="gender"
                                    className="w-full rounded-lg text-left"
                                    id="demo-simple-select"
                                    value={formData.gender}
                                    onChange={handleInputChange}
                                >
                                    <MenuItem value={''}>Sélectionner</MenuItem>
                                    <MenuItem value={"Homme"}>Homme</MenuItem>
                                    <MenuItem value={"Femme"}>Femme</MenuItem>
                                </Select>
                            </div>
                            <div>
                                <label className="block text-left text-sm font-medium text-gray-700 mb-2">
                                    Nationalité *
                                </label>
                                <TextField
                                    type="text"
                                    name="nationality"
                                    value={formData.nationality}
                                    onChange={handleInputChange}
                                    className="w-full"
                                    required
                                    size='small'
                                />
                            </div>
                        </div>
                    </div>

                    {/* Section Contact */}
                    <div className="mb-8">
                        <div className="flex items-center mb-6">
                            <Phone className="w-5 h-5 text-[#2163AE] mr-2" />
                            <h2 className="text-xl text-left font-semibold text-gray-800">Informations de Contact</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-left text-sm font-medium text-gray-700 mb-2">
                                    Téléphone *
                                </label>
                                <TextField
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full"
                                    required
                                    size='small'
                                />
                            </div>
                            <div>
                                <label className="block text-left text-sm font-medium text-gray-700 mb-2">
                                    Email *
                                </label>
                                <TextField
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full"
                                    required
                                    size='small'
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="block text-left text-sm font-medium text-gray-700 mb-2">
                                Adresse complète *
                            </label>
                            <TextField
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg  transition duration-200"
                                required
                                size='small'
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-left text-sm font-medium text-gray-700 mb-2">
                                    Ville *
                                </label>
                                <TextField
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    className="w-full"
                                    required
                                    size='small'
                                />
                            </div>
                            <div>
                                <label className="block text-left text-sm font-medium text-gray-700 mb-2">
                                    Code postal
                                </label>
                                <TextField
                                    type="text"
                                    name="postalCode"
                                    value={formData.postalCode}
                                    onChange={handleInputChange}
                                    className="w-full"
                                    size='small'
                                />
                            </div>
                        </div>
                    </div>

                    {/* Section Documents */}
                    <div className="mb-8">
                        <div className="flex items-center mb-6">
                            <FileText className="w-5 h-5 text-[#2163AE] mr-2" />
                            <h2 className="text-xl text-left font-semibold text-gray-800">Documents de Voyage</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <label className="block text-left text-sm font-medium text-gray-700 mb-2">
                                    Numéro de passeport *
                                </label>
                                <TextField
                                    type="text"
                                    name="passportNumber"
                                    value={formData.passportNumber}
                                    onChange={handleInputChange}
                                    className="w-full"
                                    required
                                    size='small'
                                />
                            </div>
                            <div>
                                <label className="block text-left text-sm font-medium text-gray-700 mb-2">
                                    Date d'expiration *
                                </label>
                                <TextField
                                    type="date"
                                    name="passportExpiry"
                                    value={formData.passportExpiry}
                                    onChange={handleInputChange}
                                    className="w-full"
                                    required
                                    size='small'
                                />
                            </div>
                            <div>
                                <label className="block text-left text-sm font-medium text-gray-700 mb-2">
                                    Type de visa
                                </label>
                                <Select
                                    size='small'
                                    className="w-full rounded-lg text-left"
                                    id="demo-simple-select"
                                    name="visaType"
                                    value={formData.visaType}
                                    onChange={handleInputChange}
                                >
                                    <MenuItem value={''}>Sélectionner</MenuItem>
                                    <MenuItem value={"hajj"}>Visa Hajj</MenuItem>
                                    <MenuItem value={"umrah"}>Visa Umrah</MenuItem>
                                    <MenuItem value={'transit'}>Visa Transit</MenuItem>
                                </Select>
                            </div>
                        </div>
                    </div>

                    {/* Section Médicale */}
                    <div className="mb-8">
                        <div className="flex items-center mb-6">
                            <Heart className="w-5 h-5 text-[#2163AE] mr-2" />
                            <h2 className="text-xl text-left font-semibold text-gray-800">Informations Médicales</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-left text-sm font-medium text-gray-700 mb-2">
                                    Conditions médicales
                                </label>
                                <TextField
                                    name="medicalConditions"
                                    value={formData.medicalConditions}
                                    onChange={handleInputChange}
                                    rows={3}
                                    className="w-full"
                                    placeholder="Allergies, maladies chroniques, etc."
                                />
                            </div>
                            <div>
                                <label className="block text-left text-sm font-medium text-gray-700 mb-2">
                                    Médicaments
                                </label>
                                <TextField
                                    name="medications"
                                    value={formData.medications}
                                    onChange={handleInputChange}
                                    rows={3}
                                    className="w-full"
                                    placeholder="Médicaments réguliers"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-left text-sm font-medium text-gray-700 mb-2">
                                    Contact d'urgence *
                                </label>
                                <TextField
                                    type="text"
                                    name="emergencyContact"
                                    value={formData.emergencyContact}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg  transition duration-200"
                                    required
                                    size='small'
                                />
                            </div>
                            <div>
                                <label className="block text-left text-sm font-medium text-gray-700 mb-2">
                                    Téléphone d'urgence *
                                </label>
                                <TextField
                                    type="tel"
                                    name="emergencyPhone"
                                    value={formData.emergencyPhone}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg  transition duration-200"
                                    required
                                    size='small'
                                />
                            </div>
                        </div>
                    </div>

                    {/* Section Préférences */}
                    <div className="mb-8">
                        <div className="flex items-center mb-6">
                            <MapPin className="w-5 h-5 text-[#2163AE] mr-2" />
                            <h2 className="text-xl font-semibold text-gray-800">Préférences de Séjour</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-left text-sm font-medium text-gray-700 mb-2">
                                    Type de package *
                                </label>
                                 <Select
                                    size='small'
                                    className="w-full rounded-lg text-left"
                                    id="demo-simple-select"
                                    name="packageType"
                                    value={formData.packageType}
                                    onChange={handleInputChange}
                                >
                                    <MenuItem value={''}>Sélectionner</MenuItem>
                                    <MenuItem value={"economique"}>Économique</MenuItem>
                                    <MenuItem value={"standard"}>Standard</MenuItem>
                                    <MenuItem value={'premium'}>Premium</MenuItem>
                                    <MenuItem value={'vip'}>VIP</MenuItem>
                                </Select>
                            </div>
                            <div>
                                <label className="block text-left text-sm font-medium text-gray-700 mb-2">
                                    Type de chambre
                                </label>
                                 <Select
                                    size='small'
                                    className="w-full rounded-lg text-left"
                                    id="demo-simple-select"
                                     name="roomType"
                                    value={formData.roomType}
                                    onChange={handleInputChange}
                                >
                                    <MenuItem value={''}>Sélectionner</MenuItem>
                                    <MenuItem value={"quad"}>Quadruple (4 personnes)</MenuItem>
                                    <MenuItem value={"triple"}>Triple (3 personnes)</MenuItem>
                                    <MenuItem value={'double'}>Double (2 personnes)</MenuItem>
                                    <MenuItem value={'single'}>Simple (1 personne)</MenuItem>
                                </Select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-left text-sm font-medium text-gray-700 mb-2">
                                Demandes spéciales
                            </label>
                            <TextField
                                name="specialRequests"
                                value={formData.specialRequests}
                                onChange={handleInputChange}
                                rows={3}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg  transition duration-200"
                                placeholder="Régime alimentaire, mobilité réduite, préférences de groupe, etc."
                            />
                        </div>
                    </div>

                    {/* Bouton de soumission */}
                    <div className="text-center">
                        <button
                            onClick={handleSubmit}
                            className="bg-gradient-to-r bg-[#2163AE] text-white font-semibold py-4 px-8 rounded-lg transform hover:scale-105 transition duration-300 shadow-lg"
                        >
                            Soumettre la demande d'inscription
                        </button>
                    </div>

                    <div className="mt-6 text-center text-sm text-gray-500">
                        <p>* Champs obligatoires</p>
                        <p className="mt-2">
                            En soumettant ce formulaire, vous acceptez nos conditions générales
                            et notre politique de confidentialité.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}