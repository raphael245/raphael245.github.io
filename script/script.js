// Fonction qui affiche les initiales, le nom complet et le nom d'utilisasteur
function afficheurDeNom() {
  // Chercher les données du formulaire
  var prenom = document.getElementById("txtPrenom").value
  var nomMilieu = document.getElementById("txtNomMilieu").value
  var nomFamille = document.getElementById("txtNomFamille").value
  
  var affiche = document.getElementById("divAffiche")
  
  // Trouver les initiales, le nom complet, et le nom d'utilisateur
  var initiales = prenom[0].toUpperCase() + "." + nomMilieu[0].toUpperCase() + "." + nomFamille[0].toUpperCase() + "."
  var nomComplet = prenom[0].toUpperCase() + prenom.substr(1).toLowerCase() + " " + nomMilieu[0].toUpperCase() + nomMilieu.substr(1).toLowerCase() + " " + nomFamille[0].toUpperCase() + nomFamille.substr(1).toLowerCase()
  var nomUtilisateur = prenom[0].toLowerCase() + nomMilieu[0].toLowerCase() + nomFamille.toLowerCase()
  
  // Construire le message à afficheurDeNom
  var message = "<br><br>Initiales : " + initiales 
  + "<br>Nom complet : " + nomComplet 
  + "<br> Nom d'utilisateur : " + nomUtilisateur
  
  // Afficher le message à l'écran
  affiche.innerHTML = message
}

