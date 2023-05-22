import { NextApiRequest, NextApiResponse } from 'next'
import { myContainer } from '../../inversify.config'
import { Warrior } from '../../interfaces'
import { TYPES } from '../../types'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const ninja = myContainer.get<Warrior>(TYPES.Warrior)
  res.status(200).json({
    ninja: {
      fight: ninja.fight(),
      sneak: ninja.sneak(),
    },
  })
}
