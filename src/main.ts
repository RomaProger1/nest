import {NestFactory} from "@nestjs/core"; // Экземпляр приложения, который вызываем из nestjs/core
import {AppModule} from "./app.module";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {JwtAuthGuard} from "./auth/jwt-auth.guard";
import {ValidationPipe} from "./pipes/validation.pipe";


async function start(){
    const PORT = process.env.PORT ||5000;// Если систем переменная не определенна, то по умолчанию порт 5000
    const app = await NestFactory.create(AppModule)// Передает модуль

    const config = new DocumentBuilder()
    .setTitle('Урок по длительности отрыжки')
    .setDescription('Документы')
    .setVersion('1.0.0')
    .addTag('Roma TV')
    .build()
    const document = SwaggerModule.createDocument(app,config);
    SwaggerModule.setup('/api/docs',app,document)

    app.useGlobalPipes(new ValidationPipe())
    
    await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`))
}

start() // Асинхр функция которая запускает приложение