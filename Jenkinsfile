pipeline {
    agent any

    stages {
        // Etapa para detener los contenedores de docker
        stage('Parando los servicios') {
            steps {
                sh '''
                docker compose -p sgu-eoj-10d down || true
                '''
            }
        }

        // Etapa para eliminar las imágenes viejas
        stage('Eliminando imagenes anteriores') {
            steps {
                sh '''
                IMAGES=$(docker images --filter "label=com.docker.compose.project=sgu-eoj-10d" -q)
                if [ -n "$IMAGES" ]; then
                    docker rmi -f $IMAGES
                else 
                    echo "No hay imagenes para eliminar"
                fi
                '''
            }
        }

        // Etapa para bajar la actualización del repo
        stage('Bajando la actualizacion del repo') {
            steps {
                checkout scm
            }
        }

        // Etapa para construir y desplegar
        stage('Construyendo y desplegando') {
            steps {
                sh '''
                docker compose up --build -d
                '''
            }
        }
    }

    // Post actions
    post {
        success {
            echo 'Pipeline completado exitosamente.'
        }
        failure {
            echo 'Ocurrió un error durante la ejecución del pipeline.'
        }
        always {
            echo 'Ejecución del Pipeline finalizado.'
        }
    }
}
