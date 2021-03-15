import { Request, Response } from 'express';
import db from "../database/connection";

export default class PrimeController{
  async calculate(request: Request, response: Response){
    const data = request.query;

    const from = data.from as unknown;
    const to = data.to as unknown;

    const fromNumber = from as number;
    const toNumber = to as number;

    var primes = [2];
    var isPrime;

    for(var i=3;i<=toNumber;i+=2){
      isPrime = true;
      for (var j = 0; j<primes.length; j++){
        if (i%primes[j]==0){
            isPrime=false;
            break;
        }
      }
      if(isPrime){primes.push(i)}
    }
    while (primes[0] < fromNumber){
      primes.shift();
    }

    const addHistory = await db('primelist').insert({
      fromNumber, toNumber, primes,
    });

    return response.json(primes);
  }

  async index(request: Request, response: Response){
    const history = await db('primelist');

    return response.json(history);
  }

  async delete(request: Request, response: Response){

    await db('primelist')
      .del()
       
    return response.status(204).json();
  }
}