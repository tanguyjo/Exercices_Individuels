import { expect, test } from 'vitest'
import {guess, tryWord  } from 'motus.js'

let base = "dictionnaire";
test('inputing dictionnaire returns true', () => {
    expect(tryWord(base,base)).toBe(true)
  }) 

  test('inputing zzz returns Array', () => {
    expect(tryWord("zzz",base)).toStrictEqual({wellPlaced:[],missplaced:[],notInWord:["z","z","z"]})
  }) 

  test('inputing arbre returns Array', () => {
    expect(tryWord("arbre",base)).toStrictEqual({wellPlaced:[],missplaced:["a","r","e"],notInWord:["b"]})
  }) 
