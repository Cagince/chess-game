/**
 * @see https://en.wikipedia.org/wiki/Forsyth%E2%80%93Edwards_Notation
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
 * 
 */



const starting_pos = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

