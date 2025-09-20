import FAQAccordion from "./ui/Accordion";

const SolutionSection = () => {

    return (
        <div className="pr-4 py-3">
            <div className="grid md:grid-cols-12 gap-12">
                <div className="md:col-span-9">
                    <div className="bg-white p-8 text-left space-y-6">
                        <h1 className="text-2xl font-bold text-[#2163AE]">Problémes rencontrées et solutions </h1>
                        <p className="flex flex-wrap items-center gap-2">
                            En tant qu’agence de voyage française spécialisée dans l’accompagnement au Hajj, nous avons constaté plusieurs obstacles techniques et humains récurrents depuis la mise en place de la plateforme Nusuk. Nos constats reposent sur des retours concrets de clients ainsi que sur les observations partagées au sein des réseaux professionnels.
                        </p>
                        <p className="font-bold text-gold">Volume important de comptes… mais conversion imparfaite</p>
                        <p>
                            Nous avons entendu que près de 100 000 comptes ont été créés en France sur la plateforme Nusuk durant la période d’ouverture des inscriptions. Ce chiffre reste à être confirmé officiellement, mais il illustre une forte mobilisation initiale.
                            Toutefois, en 2023, seuls 7 000 à 8 000 pèlerins français ont effectivement pu accomplir le Hajj — selon les statistiques recueillies.
                            En conséquence : un grand nombre d’inscriptions restent non finalisées, qu’il s’agisse d’erreurs techniques, de validation stoppée, ou de paiement non abouti.
                        </p>
                        <p className="font-bold text-gold">Difficultés techniques rencontrées</p>
                        <div>
                            <label>Nos clients nous ont rapporté plusieurs cas problématiques, notamment :</label>
                            <p>
                                Connexion interrompue au moment du paiement ou de la validation du forfait.
                                Forfait visible comme disponible, qui devient soudainement inaccessible au final.
                                Dépôt dans l’e-wallet effectué, sans validation immédiate ni retour clair, générant une incertitude dommageable.
                            </p>
                        </div>
                        <p className="font-bold text-gold">Stress généralisé et absence de soutien francophone</p>
                        <div>
                            <label>Certains candidats ont dû recommencer tout le processus à plusieurs reprises.</label><br></br>
                            <label>D’autres ont vu leur réservation validée… puis annulée sans explication.</label><br></br>
                            <label>L’absence ou la lenteur d’un support en français a fait perdre un temps précieux à plusieurs d’entre eux.</label>
                        </div>
                        <p>
                            Ces observations traduisent une réalité : le passage de l’inscription à l’accès effectif au Hajj reste trop aléatoire, même pour des candidats préparés. Cela justifie pleinement la valeur ajoutée de votre agence — une présence rassurante, opérationnelle et parfaitement alignée sur les attentes des pèlerins français.
                        </p>
                    </div>
                </div>

                <div className="md:col-span-3 mx-auto w-full">
                    <FAQAccordion />
                </div>
            </div>
        </div>
    )
}
export default SolutionSection;