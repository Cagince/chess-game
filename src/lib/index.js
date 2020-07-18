/**
 * @see https://en.wikipedia.org/wiki/Forsyth%E2%80%93Edwards_Notation
 * @see https://github.com/chess-fu/chess-modules/blob/master/modules/fen-parser/src/fenParser.ts for parsing reference
 * 
 * rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1
 * 
 * <Piece Placement> ::= <rank8>'/'<rank7>'/'<rank6>'/'<rank5>'/'<rank4>'/'<rank3>'/'<rank2>'/'<rank1>
 * <ranki>       ::= [<digit17>]<piece> {[<digit17>]<piece>} [<digit17>] | '8'
 * <piece>       ::= <white Piece> | <black Piece>
 * <digit17>     ::= '1' | '2' | '3' | '4' | '5' | '6' | '7'
 * <white Piece> ::= 'P' | 'N' | 'B' | 'R' | 'Q' | 'K'
 * <black Piece> ::= 'p' | 'n' | 'b' | 'r' | 'q' | 'k'
 *
 *
 * <Side to move> ::= {'w' | 'b'}
 *
 *
 * <Castling ability> ::= '-' | ['K'] ['Q'] ['k'] ['q'] (1..4)
 * 
 * 
 * <En passant target square> ::= '-' | <epsquare>
 * <epsquare>   ::= <fileLetter> <eprank>
 * <fileLetter> ::= 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h'
 * <eprank>     ::= '3' | '6'
 * 
 * 
 * <Halfmove Clock> ::= <digit> {<digit>}
 * <digit> ::= '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
 * 
 * 
 * <Fullmove counter> ::= <digit19> {<digit>}
 * <digit19> ::= '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
 * <digit>   ::= '0' | <digit19>
 * 
 */


const regex = /^\s*([prnbqkPRNBQK12345678]{1,8}(?:\/[prnbqkPRNBQK12345678]{1,8}){7})\s+(w|b)\s+([KQkqA-Ha-h]{1,4}|\-)\s+(?:(?:([a-h][36]|\-)\s+(\d{1,3})\s+(\d{1,4}))|(?:0\s+0))\s*$/;

const fenExpand = /[1-8]+/g;
const expandRank = n => '-'.repeat(n);
const parseRanks = ranks => ranks.split('/').map(r => r.replace(fenExpand, expandRank));
const areRanksValid = r => r.join('').length === 64;

const starting_pos = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

export const PIECES = "KQBNRPkwbnrp";

export function parse(fen) {
    const match = fen.match(regex);

    if (!match || match.length !== 7) return null;

    const [_, rawRanks, turn, castles, enpass, halfMove, moveCount ] = match;
    const ranks = parseRanks(rawRanks);

    if (!areRanksValid(ranks)) return null;

    return { 
        ranks, 
        turn,
        castles,
        enpass: enpass ?? '-',
        halfMove: parseInt(halfMove, 10),
        moveCount: parseInt(moveCount, 10),
    };
}



