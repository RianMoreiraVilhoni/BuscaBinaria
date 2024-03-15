import 'dart:math';
import 'dart:io';

void main() {
  Random random = Random();
  int numeroAleatorio = random.nextInt(100) + 1;
  int tentativas = 5;
  
  print("Tente adivinhar o número entre 1 e 100 (você tem $tentativas tentativas):");

  for (int i = 0; i < tentativas; i++) {
    stdout.write("Tentativa ${i + 1}: ");
    int palpite = int.parse(stdin.readLineSync()!);

    if (palpite == numeroAleatorio) {
      print("Parabéns! Você acertou o número.");
      return;
    } else if (palpite < numeroAleatorio) {
      print("O número é maior.");
    } else {
      print("O número é menor.");
    }
  }

  print("Suas tentativas acabaram. O número correto era $numeroAleatorio.");
}
