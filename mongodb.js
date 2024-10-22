
import { MongoClient } from 'mongodb';


const uri = "mongodb+srv://dragosdb:dragosdb1214@database.ifbfj.mongodb.net/?retryWrites=true&w=majority&appName=Database";
const client = new MongoClient(uri);

// Function to get user data by userId (cookie)
async function getUserData(userId) {
  try {
    await client.connect();
    const database = client.db('clickerGameDB');
    const users = database.collection('users');
    const query = { userId: userId };
    const userData = await users.findOne(query);
    return userData;
  } catch (error) {
    console.error('Error retrieving user data:', error);
  } finally {
    await client.close();
  }
}

async function saveUserData(userId, data) {
  try {
    await client.connect();
    const database = client.db('clickerGameDB');
    const users = database.collection('users');
    const filter = { userId: userId };
    const updateDoc = {
      $set: {
        userId: userId,
        clickerLevel: data.clickerLevel,
        pickaxeLevel: data.pickaxeLevel,
        minerLevel: data.minerLevel,
        passiveMiningLevel: data.passiveMiningLevel,
        gpc: data.gpc,
        passiveGpc: data.passiveGpc,
        gems: data.gems,
        parsedClickerIncrease: data.parsedClickerIncrease,
        parsedPickaxeIncrease: data.parsedPickaxeIncrease,
        parsedMinerIncrease: data.parsedMinerIncrease,
      }
    };
    await users.updateOne(filter, updateDoc, { upsert: true });
  } catch (error) {
    console.error('Error saving user data:', error);
  } finally {
    await client.close();
  }
}

export { getUserData, saveUserData };
