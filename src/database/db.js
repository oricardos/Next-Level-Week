// importar a dependencia do sqlite3

const sqlite3 = require("sqlite3").verbose()

// criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
// utilizar o objeto de banco de dados para nossas operações
// db.serialize(() => {
// // comandos SQL

// // criar uma tabela
// //     db.run(`
// //             CREATE TABLE IF NOT EXISTS places (
// //                 id INTEGER PRIMARY KEY AUTOINCREMENT,
// //                 image TEXT,
// //                 name TEXT,
// //                 address TEXT,
// //                 address2 TEXT,
// //                 state TEXT,
// //                 city TEXT,
// //                 items TEXT
// //             );
// //         `)

// // // inserir dados na tabela
// //     const query = `
// //         INSERT INTO places (
// //             image,
// //             name,
// //             address,
// //             address2,
// //             state,
// //             city,
// //             items
// //         ) VALUES ( ?,?,?,?,?,?,? );
// //     `

// //     const values = [
// //         "https://images.unsplash.com/photo-1591388783682-1609c4bcd8cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
// //         "Papersiders",
// //         "Guilherme Gemballa, Jardim América",
// //         "Número 890",
// //         "Santa Catarina",
// //         "Rio do Sul",
// //         "Papéis e Papelão"
// //     ]

// //     function afterInsertData(err) {
// //         if(err) {
// //             return console.log(err)
// //         }

// //         console.log("Cadastrado com Sucesso!")
// //         console.log(this)
// //     }

// //     db.run(query, values, afterInsertData)

// // consultar os dados da tabela
//     // db.all(`SELECT * FROM places`, function(err, rows){
//     //     if(err) {
//     //         return console.log(err)
//     //     }

//     //     console.log("Aqui estão seus registros: ")
//     //     console.log(rows)
//     // })

// // deletar um dado da tabela
//     // db.run(`DELETE FROM places WHERE id = ?`, [3], function(err){
//     //     if(err) {
//     //         return console.log(err)
//     //     }

//     //     console.log("Registro deletado com sucesso")
//     // })
// })
