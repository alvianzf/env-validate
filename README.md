# env-validate 🛠️💀  
### Because forgetting .env variables is your full-time job.  

---

## **What is this?**  
Oh, just another **life-saving** tool you never knew you needed—until your app blew up because you forgot to set `DATABASE_URL`. **env-validate** does one thing: **it checks if your `.env` file has all the required variables from `.env.example`** and screams at you if it doesn’t.  

Yes, that's right. It **spoon-feeds** you the information your own brain refuses to retain.  

---

## **Installation**  
Because I *know* you're just gonna forget this too:  

```sh
npm install env-validate
```
---
## Usage
### 1. Create a .env.example file (because planning ahead is hard)
Put all the required environment variables in it:
```ini
PORT=3000
DATABASE_URL=your_database_url
JWT_SECRET=your_secret_key
```

### 2. Forget to set some variables in .env (because of course you will)
```ini
PORT=3000
DATABASE_URL=your_database_url
# Oops, forgot JWT_SECRET. Enjoy debugging!
```

### 3. 3. Run the script and get shamed:
```js
const validateEnv = require("env-validate");
validateEnv();
```

4. Behold the judgmental error message:
```swift
❌ Missing required environment variables: JWT_SECRET  
```
There. Now you have no excuses.

---

## Why should you care?
- Because debugging "why is my app broken?" at 3 AM isn't fun.
- Because production crashes due to missing .env variables are not a flex.
- Because telling your boss, "I forgot to set JWT_SECRET" will get you roasted in standup.

---

## Contribute? Sure, why not.
If you somehow find a way to make this even more idiot-proof, feel free to submit a PR. Or just star the repo and pretend you helped.

---

## License
MIT. Do whatever you want, but if you blame me when your app crashes, I will laugh at you.
