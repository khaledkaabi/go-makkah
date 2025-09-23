import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

const FAQAccordion = () => {
    return (
        <div className="w-full max-w-md">
            <Accordion.Root
                type="single"
                collapsible
                className="w-full border rounded-lg border-gold"
                defaultValue="item-1"
            >
                {/* Premier accordion item */}
                <Accordion.Item value="item-1" className="bg-transparent border-b border-gray-200">
                    <Accordion.Header>
                        <Accordion.Trigger className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-gray-800 focus:outline-none transition-colors group">
                            <span>Compte Nusuk bloqué à la création ?</span>
                            <ChevronDown className="h-4 w-4 text-gold transition-transform duration-200 group-data-[state=open]:rotate-180" />
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="overflow-hidden bg-gray-100 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                        <div className="px-4 pb-4">
                            <div className="space-y-4 text-sm text-gray-600">
                                <div className='mt-2'>
                                    <h4 className="font-medium text-left text-gray-800 mb-2">Introduction</h4>
                                    <p className="leading-relaxed text-xs text-left">
                                        Chaque année, de nombreux pèlerins français rencontrent des difficultés dès la
                                        première étape : la création du compte sur la plateforme Nusuk. Sans ce compte,
                                        impossible d'accéder aux packages du Hajj.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-medium text-left text-gray-800 mb-2">Causes fréquentes</h4>
                                    <ul className="space-y-1 text-left text-sm">
                                        <li className="flex items-start">
                                            <span className="mr-2">•</span>
                                            <span>Informations personnelles mal saisies (nom, numéro de passeport)</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2">•</span>
                                            <span>Adresse email ou numéro de téléphone non validés.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2">•</span>
                                            <span>Tentatives multiples entraînant un blocage automatique.</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-medium text-gold mb-2 text-left">Solutions possibles</h4>
                                    <ol className="space-y-2 text-sm text-left">
                                        <li className="flex items-start">
                                            <span className="font-medium mr-2">1.</span>
                                            <span>Vérifiez que vos données correspondent exactement au passeport (majuscules, accents).</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="font-medium mr-2">2.</span>
                                            <span>Utilisez un numéro de téléphone valide (idéalement un portable international).</span>
                                        </li>
                                    </ol>
                                </div>
                                <div className='flex justify-end'>
                                    <button className="text-gold text-xs hover:text-orange-700 transition-colors">
                                        Afficher la suite ?
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item value="item-2" className="bg-transparent border-b border-gray-200">
                    <Accordion.Header>
                        <Accordion.Trigger className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-gray-800 focus:outline-none transition-colors group">
                            <span>⁠Carte bancaire refusée par Nusuk ?</span>
                            <ChevronDown className="h-4 w-4 text-gold transition-transform duration-200 group-data-[state=open]:rotate-180" />
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                        <div className="px-4 pb-4">
                            <div className="space-y-4 text-sm text-gray-600">
                                <div className='mt-2'>
                                    <h4 className="font-medium text-left text-gray-800 mb-2">Introduction</h4>
                                    <p className="leading-relaxed text-xs text-left">
                                        Chaque année, de nombreux pèlerins français rencontrent des difficultés dès la
                                        première étape : la création du compte sur la plateforme Nusuk. Sans ce compte,
                                        impossible d'accéder aux packages du Hajj.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-medium text-left text-gray-800 mb-2">Causes fréquentes</h4>
                                    <ul className="space-y-1 text-left text-sm">
                                        <li className="flex items-start">
                                            <span className="mr-2">•</span>
                                            <span>Informations personnelles mal saisies (nom, numéro de passeport)</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2">•</span>
                                            <span>Adresse email ou numéro de téléphone non validés.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2">•</span>
                                            <span>Tentatives multiples entraînant un blocage automatique.</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-medium text-gold mb-2 text-left">Solutions possibles</h4>
                                    <ol className="space-y-2 text-sm text-left">
                                        <li className="flex items-start">
                                            <span className="font-medium mr-2">1.</span>
                                            <span>Vérifiez que vos données correspondent exactement au passeport (majuscules, accents).</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="font-medium mr-2">2.</span>
                                            <span>Utilisez un numéro de téléphone valide (idéalement un portable international).</span>
                                        </li>
                                    </ol>
                                </div>
                                <div className='flex justify-end'>
                                    <button className="text-gold text-xs hover:text-orange-700 transition-colors">
                                        Afficher la suite ?
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item value="item-3" className="bg-transparent">
                    <Accordion.Header>
                        <Accordion.Trigger className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-gray-800 focus:outline-none transition-colors group">
                            <span> ⁠Forfait confirmé puis annulé sur Nusuk?</span>
                            <ChevronDown className="h-4 w-4 text-gold transition-transform duration-200 group-data-[state=open]:rotate-180" />
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                        <div className="px-4 pb-4">
                            <div className="space-y-4 text-sm text-gray-600">
                                <div className='mt-2'>
                                    <h4 className="font-medium text-left text-gray-800 mb-2">Introduction</h4>
                                    <p className="leading-relaxed text-xs text-left">
                                        Chaque année, de nombreux pèlerins français rencontrent des difficultés dès la
                                        première étape : la création du compte sur la plateforme Nusuk. Sans ce compte,
                                        impossible d'accéder aux packages du Hajj.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-medium text-left text-gray-800 mb-2">Causes fréquentes</h4>
                                    <ul className="space-y-1 text-left text-sm">
                                        <li className="flex items-start">
                                            <span className="mr-2">•</span>
                                            <span>Informations personnelles mal saisies (nom, numéro de passeport)</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2">•</span>
                                            <span>Adresse email ou numéro de téléphone non validés.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2">•</span>
                                            <span>Tentatives multiples entraînant un blocage automatique.</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-medium text-gold mb-2 text-left">Solutions possibles</h4>
                                    <ol className="space-y-2 text-sm text-left">
                                        <li className="flex items-start">
                                            <span className="font-medium mr-2">1.</span>
                                            <span>Vérifiez que vos données correspondent exactement au passeport (majuscules, accents).</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="font-medium mr-2">2.</span>
                                            <span>Utilisez un numéro de téléphone valide (idéalement un portable international).</span>
                                        </li>
                                    </ol>
                                </div>
                                <div className='flex justify-end'>
                                    <button className="text-gold text-xs hover:text-orange-700 transition-colors">
                                        Afficher la suite ?
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Accordion.Content>
                </Accordion.Item>
            </Accordion.Root>

        
        </div>
    );
};
export default FAQAccordion;