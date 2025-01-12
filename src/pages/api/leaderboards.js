import connectToDatabase from '@/lib/mongodb';
import Leaderboard from '@/models/Leaderboard';

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === 'GET') {
    try {
      const leaderboard = await Leaderboard.find().sort({ points: -1 }).limit(10); // Mendapatkan 10 skor tertinggi
      res.status(200).json(leaderboard);
    } catch (error) {
      console.error(error); // Menampilkan error di konsol
      res.status(500).json({ message: 'Server error' });
    }
  } else if (req.method === 'POST') {
    try {
      const { name, points } = req.body;
      const newScore = new Leaderboard({ name, points });
      await newScore.save();
      res.status(201).json(newScore);
    } catch (error) {
      console.error(error); // Menampilkan error di konsol
      res.status(500).json({ message: 'Error saving score' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
