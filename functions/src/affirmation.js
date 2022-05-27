import connectDb from "../connectDb.js";

export function getAffirmations(req, res) {
  const db = connectDb();
  db.collection("affirmations")
    .get()
    .then((snapshot) => {
      const allAffirmations = snapshot.docs.map((doc) => {
        let affirmation = doc.data();
        affirmation.id = doc.id;
        return affirmation;
      });
      res.send(allAffirmations);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
}


export function addAffirmations(req,res) {
    if(!req.body) {
        res.status(401).send ('Invalid request');
        return;
    }
    const db= connectDb();
    db.collection('affirmations').add(req.body)
    .then(doc =>{
        res.send('Affirmation created' + doc.id)
    })
    .catch((err) => {
        res.status(500).send(err);
      });
}



