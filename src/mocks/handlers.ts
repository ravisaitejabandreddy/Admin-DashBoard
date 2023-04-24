import {rest} from 'msw'
import { adverseActionsList, CandidateDetail, candidatesList, EditCandidateDetail } from './config'

export const handlers=[
    rest.get('http://localhost:8000/candidate',(req,res,ctx)=>{
       return res(
        ctx.status(200),
        ctx.json(candidatesList)
       )
    }),
    rest.get('http://localhost:8000/adverseActionsList',(req,res,ctx)=>{
       return res(
        ctx.status(200),
        ctx.json(adverseActionsList)
       )
    }),
    rest.get('http://localhost:8000/candidate/:id',(req,res,ctx)=>{
       return res(
        ctx.status(200),
        ctx.json(CandidateDetail)
       )
    }),
   rest.patch('http://localhost:8000/candidate/:id',(req,res,ctx)=>{
      return res(
       ctx.status(200),
       ctx.json(EditCandidateDetail)
      )
   })
]