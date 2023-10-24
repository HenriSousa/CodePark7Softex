public class funcaoCal {
    public class SomaStrategy implements Strategy {
        @Override
        public int execute(int num1, int num2) {
            return num1 + num2;
        }
    }
    
    public class SubtracaoStrategy implements Strategy {
        @Override
        public int execute(int num1, int num2) {
            return num1 - num2;
        }
    }
    
    public class MultiplicacaoStrategy implements Strategy {
        @Override
        public int execute(int num1, int num2) {
            return num1 * num2;
        }
    }
   
}
